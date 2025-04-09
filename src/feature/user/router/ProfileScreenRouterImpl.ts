import { Inject, Injectable } from 'flexdi'
import { NavigationService } from '../../../common/service/navigation/NavigationService'
import { ProfileScreenRouter } from './ProfileScreenRouter'

@Injectable()
export class ProfileScreenRouterImpl extends ProfileScreenRouter {

  constructor(@Inject(NavigationService) private readonly navigationService: NavigationService) {
    super()
  }

  public navigateToHome(): void {
    this.navigationService.goBack()
  }
}
