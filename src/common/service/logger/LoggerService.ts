export abstract class LoggerService {

  abstract log(message: string): void

  abstract error(message: string, error?: Error): void

  abstract info(message: string): void
}
