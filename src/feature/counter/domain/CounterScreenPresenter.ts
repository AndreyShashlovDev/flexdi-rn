import { BasicPresenter } from 'flexdi'
import { Observable } from 'rxjs'

export abstract class CounterScreenPresenter extends BasicPresenter<void> {

  abstract getCount(): Observable<number>

  abstract increment(): void

  abstract decrement(): void

  abstract reset(): void

  abstract onBackButtonClick(): void
}
