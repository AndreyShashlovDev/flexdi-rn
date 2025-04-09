import { Module } from 'flexdi'
import { LoggerModule } from '../../../common/di/LoggerModule'
import { UserRepository } from '../data/repository/user/UserRepository'
import { UserRepositoryImpl } from '../data/repository/user/UserRepositoryImpl'
import { ProfileScreenPresenter } from '../domain/ProfileScreenPresenter'
import { ProfileScreenPresenterImpl } from '../domain/ProfileScreenPresenterImpl'
import { ProfileScreenRouter } from '../router/ProfileScreenRouter'
import { ProfileScreenRouterImpl } from '../router/ProfileScreenRouterImpl'

@Module({
  imports: [LoggerModule],
  providers: [
    {provide: ProfileScreenRouter, useClass: ProfileScreenRouterImpl},
    {provide: UserRepository, useClass: UserRepositoryImpl},
    {provide: ProfileScreenPresenter, useClass: ProfileScreenPresenterImpl}
  ],
  exports: [ProfileScreenPresenter]
})
export class ProfileScreenModule {}
