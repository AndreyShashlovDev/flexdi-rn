import { Inject, Injectable } from 'flexdi'
import { LoggerService } from '../../../../common/service/logger/LoggerService'
import { HomeService, MenuItem } from './HomeService'

export enum MenuItemId {
  COUNTER,
  PROFILE,
}

@Injectable()
export class HomeServiceImpl implements HomeService {

  constructor(@Inject(LoggerService) private logger: LoggerService) {}

  getMenuItems(): MenuItem[] {
    this.logger.log('getMenuItems called')

    return [
      {
        id: MenuItemId.COUNTER,
        title: 'Counter',
        description: 'Demonstration of state management using FlexDI',
      },
      {
        id: MenuItemId.PROFILE,
        title: 'User profile',
        description: 'An example of obtaining data using presenters and services',
      }
    ]
  }
}
