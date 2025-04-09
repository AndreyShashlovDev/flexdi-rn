import { Module } from 'flexdi'
import { NavigationService } from '../service/navigation/NavigationService'
import { NavigationServiceImpl } from '../service/navigation/NavigationServiceImpl'
import { LoggerModule } from './LoggerModule'

@Module({
  imports: [LoggerModule],
  providers: [
    {
      provide: NavigationService,
      useClass: NavigationServiceImpl
    }
  ],
  exports: [NavigationService]
})
export class NavigationModule {}
