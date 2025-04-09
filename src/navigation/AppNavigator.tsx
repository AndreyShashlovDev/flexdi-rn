import { createStackNavigator } from '@react-navigation/stack'
import { createModuleNavigator, createModuleScreen, ErrorBoundary } from 'flexdi/react-native'
import React from 'react'
import ErrorScreen from '../common/app-ui/ErrorScreen'
import LoadingScreen from '../common/app-ui/LoadingScreen'
import { CounterScreenModule } from '../feature/counter/di/CounterScreenModule'
import CounterScreen from '../feature/counter/presentation/CounterScreen'
import { HomeScreenModule } from '../feature/home/di/HomeScreenModule'
import HomeScreen from '../feature/home/presentation/HomeScreen'
import { ProfileScreenModule } from '../feature/user/di/ProfileScreenModule'
import ProfileScreen from '../feature/user/presentation/ProfileScreen'
import { NavigationScreen } from './NavigationScreen'

const Stack = createStackNavigator()

const CounterScreenWithModule = createModuleScreen({
  module: CounterScreenModule,
  Component: CounterScreen,
  LoadingComponent: LoadingScreen,
  ErrorComponent: ErrorScreen,
  ErrorBoundary: ErrorBoundary,
  navigationOptions: {
    title: 'Counter'
  }
})

const navigatorConfig = createModuleNavigator({
  type: 'stack',
  screens: [
    {
      name: NavigationScreen.HOME,
      Component: HomeScreen,
      module: HomeScreenModule,
      options: {title: 'Main'}
    },
    {
      name: NavigationScreen.PROFILE,
      Component: ProfileScreen,
      module: ProfileScreenModule,
      options: {title: 'Profile'}
    }
  ],
  defaultScreenOptions: {
    headerStyle: {
      backgroundColor: '#4a90e2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  LoadingComponent: LoadingScreen,
  ErrorComponent: ErrorScreen,
  // ErrorBoundary:  optional
})

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationScreen.HOME}
      screenOptions={navigatorConfig.navigatorOptions}
    >
      {navigatorConfig.screens.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.component.navigationOptions}
        />
      ))}
      <Stack.Screen
        name={NavigationScreen.COUNTER}
        component={CounterScreenWithModule}
        options={CounterScreenWithModule.navigationOptions}
      />
    </Stack.Navigator>
  )
}

export default AppNavigator
