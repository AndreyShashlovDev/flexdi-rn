import { BasicPresenter } from 'flexdi'
import { Observable } from 'rxjs'
import { MenuItem } from './service/HomeService'

export abstract class HomeScreenPresenter extends BasicPresenter<void> {

  abstract getMenuItems(): Observable<MenuItem[]>

  abstract onMenuItemClick(id: number): void
}
