import { Inject, Injectable } from 'flexdi'
import { LoggerService } from '../../../../../common/service/logger/LoggerService'
import { UserResponse } from '../model/UserResponse'
import { UserRepository } from './UserRepository'

@Injectable()
export class UserRepositoryImpl implements UserRepository {

  constructor(@Inject(LoggerService) private logger: LoggerService) {}

  async getUserProfile(): Promise<UserResponse> {
    this.logger.log('getUserProfile api call')

    await new Promise(resolve => setTimeout(resolve, 1000))

    return {
      id: '1',
      name: 'Ivan Ivanov',
      email: 'ivan@flexdi.dev',
      avatar: 'https://via.placeholder.com/150',
      bio: 'React Native App Developer Using FlexDI Architecture',
      stats: {
        followers: 120,
        following: 85,
        posts: 42
      }
    }
  }
}
