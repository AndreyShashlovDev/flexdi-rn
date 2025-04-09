import { Observable } from 'rxjs'

export abstract class CounterService {

  abstract getCount(): Observable<number>

  abstract increment(): void

  abstract decrement(): void

  abstract reset(): void
}
