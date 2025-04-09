import { NavigationContainerRef } from '@react-navigation/native'

export abstract class NavigationService {

  abstract setNavigationRef(ref: NavigationContainerRef<any>): void

  abstract navigate(routeName: string, params?: object): void

  abstract goBack(): void
}
