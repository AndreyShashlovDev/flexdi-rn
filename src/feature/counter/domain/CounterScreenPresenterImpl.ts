import { Inject, Injectable } from 'flexdi'
import { Observable } from 'rxjs'
import { LoggerService } from '../../../common/service/logger/LoggerService'
import { CounterScreenRouter } from '../router/CounterScreenRouter'
import { CounterScreenPresenter } from './CounterScreenPresenter'
import { CounterService } from './service/CounterService'

@Injectable()
export class CounterScreenPresenterImpl extends CounterScreenPresenter {

  constructor(
    @Inject(CounterService) private readonly counterService: CounterService,
    @Inject(LoggerService) private readonly logger: LoggerService,
    @Inject(CounterScreenRouter) private readonly router: CounterScreenRouter,
  ) {
    super()
  }

  ready(): void {
    this.logger.log('CounterPresenter ready')
  }

  destroy(): void {
    this.logger.log('CounterPresenter destroy')
  }

  getCount(): Observable<number> {
    return this.counterService.getCount()
  }

  increment(): void {
    this.counterService.increment()
  }

  decrement(): void {
    this.counterService.decrement()
  }

  reset(): void {
    this.counterService.reset()
  }

  onBackButtonClick(): void {
    this.router.navigateToHome()
  }
}
