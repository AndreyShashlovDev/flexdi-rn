export class UserStatsResponse {
  public readonly followers: number
  public readonly following: number
  public readonly posts: number

  constructor(followers: number, following: number, posts: number) {
    this.followers = followers
    this.following = following
    this.posts = posts
  }
}

export class UserResponse {

  public readonly id: string
  public readonly name: string
  public readonly email: string
  public readonly avatar: string
  public readonly bio: string
  public readonly stats: UserStatsResponse

  constructor(
    id: string,
    name: string,
    email: string,
    avatar: string,
    bio: string,
    stats: UserStatsResponse
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.avatar = avatar
    this.bio = bio
    this.stats = stats
  }
}
