import { Module } from 'flexdi'
import { LoggerModule } from '../../../common/di/LoggerModule'
import { HomeScreenPresenter } from '../domain/HomeScreenPresenter'
import { HomeScreenPresenterImpl } from '../domain/HomeScreenPresenterImpl'
import { HomeService } from '../domain/service/HomeService'
import { HomeServiceImpl } from '../domain/service/HomeServiceImpl'
import { HomeScreenRouter } from '../router/HomeScreenRouter'
import { HomeScreenRouterImpl } from '../router/HomeScreenRouterImpl'

@Module({
  imports: [LoggerModule],
  providers: [
    {provide: HomeScreenRouter, useClass: HomeScreenRouterImpl},
    {provide: HomeService, useClass: HomeServiceImpl},
    {provide: HomeScreenPresenter, useClass: HomeScreenPresenterImpl}
  ],
  exports: [HomeScreenPresenter]
})
export class HomeScreenModule {}
