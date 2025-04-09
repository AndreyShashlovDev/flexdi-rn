import { Injectable } from 'flexdi'
import { LoggerService } from './LoggerService'

@Injectable()
export class LoggerServiceImpl extends LoggerService {

  constructor() {
    super()
  }

  log(message: string): void {
    console.log(`[LOG] ${message}`)
  }

  error(message: string, error?: Error): void {
    console.error(`[ERROR] ${message}`, error)
  }

  info(message: string): void {
    console.info(`[INFO] ${message}`)
  }
}
