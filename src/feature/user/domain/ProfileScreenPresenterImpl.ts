import { Inject, Injectable } from 'flexdi'
import { BehaviorSubject, Observable } from 'rxjs'
import { LoggerService } from '../../../common/service/logger/LoggerService'
import { UserResponse } from '../data/repository/model/UserResponse'
import { UserRepository } from '../data/repository/user/UserRepository'
import { ProfileScreenRouter } from '../router/ProfileScreenRouter'
import { ProfileScreenPresenter } from './ProfileScreenPresenter'

@Injectable()
export class ProfileScreenPresenterImpl extends ProfileScreenPresenter {

  private readonly user = new BehaviorSubject<UserResponse | null>(null)
  private readonly isLoading = new BehaviorSubject<boolean>(false)
  private readonly error = new BehaviorSubject<string | null>(null)

  constructor(
    @Inject(UserRepository) private readonly userService: UserRepository,
    @Inject(LoggerService) private readonly logger: LoggerService,
    @Inject(ProfileScreenRouter) private readonly router: ProfileScreenRouter,
  ) {
    super()
  }

  ready(): void {
    this.logger.log('UserPresenter ready')
    this.loadUser()
  }

  destroy(): void {
    this.logger.log('UserPresenter destroy')
    this.user.complete()
    this.isLoading.complete()
    this.error.complete()
  }

  getUser(): Observable<UserResponse | null> {
    return this.user.asObservable()
  }

  getIsLoading(): Observable<boolean> {
    return this.isLoading.asObservable()
  }

  getError(): Observable<string | null> {
    return this.error.asObservable()
  }

  async loadUser(): Promise<void> {
    this.isLoading.next(true)
    this.error.next(null)

    try {
      const user = await this.userService.getUserProfile()
      this.user.next(user)
      this.isLoading.next(false)
    } catch (err) {
      this.logger.error('User profile loading error', err as Error)
      this.error.next('Failed to load user data')
      this.isLoading.next(false)
    }
  }

  onBackButtonClick(): void {
    this.router.navigateToHome()
  }
}
