import { Inject, Injectable } from 'flexdi'
import { NavigationService } from '../../../common/service/navigation/NavigationService'
import { NavigationScreen } from '../../../navigation/NavigationScreen'
import { HomeScreenRouter } from './HomeScreenRouter'

@Injectable()
export class HomeScreenRouterImpl extends HomeScreenRouter {

  constructor(
    @Inject(NavigationService) private readonly navigationService: NavigationService
  ) {
    super()
  }

  navigateToCounter(): void {
    this.navigationService.navigate(NavigationScreen.COUNTER)
  }

  navigateToProfile(): void {
    this.navigationService.navigate(NavigationScreen.PROFILE)
  }
}
