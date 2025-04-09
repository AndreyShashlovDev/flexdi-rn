import 'reflect-metadata'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { ErrorBoundary, ModuleLoader, RootModuleLoader, useInject } from 'flexdi/react-native'
import { ReactNode, StrictMode, useEffect, useRef } from 'react'
import { AppModule } from './AppModule'
import ErrorScreen from './src/common/app-ui/ErrorScreen'
import LoadingScreen from './src/common/app-ui/LoadingScreen'
import { NavigationService } from './src/common/service/navigation/NavigationService'
import AppNavigator from './src/navigation/AppNavigator'

const NavigationInitializer = ({children}: { children: ReactNode }) => {
  const navigationService = useInject(NavigationService)

  const navigationRef = useRef<NavigationContainerRef<any>>(null)

  useEffect(() => {
    if (navigationRef.current) {
      navigationService.setNavigationRef(navigationRef.current)
    }
  }, [navigationService])

  return (
    <NavigationContainer ref={navigationRef}>
      {children}
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <StrictMode>
      <RootModuleLoader
        module={AppModule}
        LoadingComponent={LoadingScreen}
        ErrorComponent={ErrorScreen}
        ErrorBoundary={ErrorBoundary}  // -- optional
        enableStrictMode={true}
      >
        <NavigationInitializer>
          <AppNavigator />
        </NavigationInitializer>
      </RootModuleLoader>
    </StrictMode>
  )
}

export default App
