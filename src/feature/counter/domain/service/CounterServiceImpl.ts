import { Inject, Injectable } from 'flexdi';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoggerService } from '../../../../common/service/logger/LoggerService'
import { CounterService } from './CounterService'

@Injectable()
export class CounterServiceImpl implements CounterService {
  private count = new BehaviorSubject<number>(0);

  constructor(@Inject(LoggerService) private logger: LoggerService) {}

  getCount(): Observable<number> {
    return this.count.asObservable();
  }

  increment(): void {
    const currentValue = this.count.getValue();
    this.count.next(currentValue + 1);
    this.logger.log(`Счетчик увеличен: ${currentValue + 1}`);
  }

  decrement(): void {
    const currentValue = this.count.getValue();
    this.count.next(currentValue - 1);
    this.logger.log(`Счетчик уменьшен: ${currentValue - 1}`);
  }

  reset(): void {
    this.count.next(0);
    this.logger.log('Счетчик сброшен в 0');
  }
}
