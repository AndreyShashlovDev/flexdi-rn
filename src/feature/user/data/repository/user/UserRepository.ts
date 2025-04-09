import { UserResponse } from '../model/UserResponse'

export abstract class UserRepository {

  abstract getUserProfile(): Promise<UserResponse>
}
