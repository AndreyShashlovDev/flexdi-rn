import { MenuItemId } from './HomeServiceImpl'

export interface MenuItem {
  id: MenuItemId
  title: string
  description: string
}

export abstract class HomeService {

  abstract getMenuItems(): MenuItem[]
}
