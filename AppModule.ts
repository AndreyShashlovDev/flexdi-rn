import { Module } from 'flexdi'
import { LoggerModule } from './src/common/di/LoggerModule'
import { NavigationModule } from './src/common/di/NavigationModule'
import { LoggerService } from './src/common/service/logger/LoggerService'
import { NavigationService } from './src/common/service/navigation/NavigationService'

@Module({
  imports: [LoggerModule, NavigationModule],
  exports: [LoggerService, NavigationService]
})
export class AppModule {}
