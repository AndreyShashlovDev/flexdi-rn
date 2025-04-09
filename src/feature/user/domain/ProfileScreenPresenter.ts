import { BasicPresenter } from 'flexdi'
import { Observable } from 'rxjs'
import { UserResponse } from '../data/repository/model/UserResponse'

export abstract class ProfileScreenPresenter extends BasicPresenter<void> {

  abstract getUser(): Observable<UserResponse | null> // fixme use domain layer user model

  abstract getIsLoading(): Observable<boolean>

  abstract getError(): Observable<string | null>

  abstract loadUser(): Promise<void>

  abstract onBackButtonClick(): void
}
