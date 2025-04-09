import { Inject, Injectable } from 'flexdi'
import { NavigationService } from '../../../common/service/navigation/NavigationService'
import { CounterScreenRouter } from './CounterScreenRouter'

@Injectable()
export class CounterScreenRouterImpl extends CounterScreenRouter {

  constructor(@Inject(NavigationService) private readonly navigationService: NavigationService) {
    super()
  }

  public navigateToHome(): void {
    this.navigationService.goBack()
  }
}
