import { Inject, Injectable } from 'flexdi'
import { BehaviorSubject, Observable } from 'rxjs'
import { LoggerService } from '../../../common/service/logger/LoggerService'
import { HomeScreenRouter } from '../router/HomeScreenRouter'
import { HomeScreenPresenter } from './HomeScreenPresenter'
import { HomeService, MenuItem } from './service/HomeService'
import { MenuItemId } from './service/HomeServiceImpl'

@Injectable()
export class HomeScreenPresenterImpl extends HomeScreenPresenter {
  private menuItems = new BehaviorSubject<MenuItem[]>([])

  constructor(
    @Inject(HomeService) private homeService: HomeService,
    @Inject(LoggerService) private logger: LoggerService,
    @Inject(HomeScreenRouter) private router: HomeScreenRouter
  ) {
    super()
  }

  ready(): void {
    this.logger.log('HomePresenter ready')
    this.menuItems.next(this.homeService.getMenuItems())
  }

  destroy(): void {
    this.logger.log('HomePresenter destroy')
    this.menuItems.complete()
  }

  getMenuItems(): Observable<MenuItem[]> {
    return this.menuItems.asObservable()
  }

  public onMenuItemClick(id: number): void {
    if (MenuItemId.COUNTER === id) {
      this.router.navigateToCounter()
    } else {
      this.router.navigateToProfile()
    }
  }
}
