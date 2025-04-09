import { Module } from 'flexdi'
import { LoggerModule } from '../../../common/di/LoggerModule'
import { LoggerService } from '../../../common/service/logger/LoggerService'
import { CounterScreenPresenter } from '../domain/CounterScreenPresenter'
import { CounterScreenPresenterImpl } from '../domain/CounterScreenPresenterImpl'
import { CounterService } from '../domain/service/CounterService'
import { CounterServiceImpl } from '../domain/service/CounterServiceImpl'
import { CounterScreenRouter } from '../router/CounterScreenRouter'
import { CounterScreenRouterImpl } from '../router/CounterScreenRouterImpl'

@Module({
  imports: [LoggerModule],
  providers: [
    {provide: CounterScreenRouter, useClass: CounterScreenRouterImpl},
    {
      provide: CounterService,
      deps: [LoggerService],
      // just for example
      useFactory: async (loggerService: LoggerService) => {
        await new Promise<void>(resolve => setTimeout(() => resolve(), 2000))

        return new CounterServiceImpl(loggerService)
      }
    },
    {provide: CounterScreenPresenter, useClass: CounterScreenPresenterImpl}
  ],
  exports: [CounterScreenPresenter]
})
export class CounterScreenModule {}
