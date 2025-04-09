import { Module } from 'flexdi'
import { LoggerService } from '../service/logger/LoggerService'
import { LoggerServiceImpl } from '../service/logger/LoggerServiceImpl'

@Module({
  providers: [
    {
      provide: LoggerService,
      useClass: LoggerServiceImpl
    }
  ],
  exports: [LoggerService]
})
export class LoggerModule {}
