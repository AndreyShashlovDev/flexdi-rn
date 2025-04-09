import { NavigationContainerRef } from '@react-navigation/native'
import { Inject, Injectable } from 'flexdi'
import { LoggerService } from '../logger/LoggerService'
import { NavigationService } from './NavigationService'

@Injectable()
export class NavigationServiceImpl extends NavigationService {

  private navigationRef: NavigationContainerRef<any> | null = null

  constructor(@Inject(LoggerService) private readonly logger: LoggerService) {
    super()
  }

  setNavigationRef(ref: NavigationContainerRef<any>): void {
    this.navigationRef = ref
  }

  navigate(routeName: string, params?: object): void {
    if (this.navigationRef && this.navigationRef.isReady()) {
      this.logger.log(`Navigate to screen: ${routeName}`)
      // @ts-ignore
      this.navigationRef.navigate(routeName as never, params as never)
    } else {
      this.logger.error('NavigationRef not ready yet!')
    }
  }

  goBack(): void {
    if (this.navigationRef && this.navigationRef.isReady() && this.navigationRef.canGoBack()) {
      this.navigationRef.goBack()
    } else {
      this.logger.error('Error goBack()')
    }
  }
}
