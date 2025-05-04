import config from '../../../config/index'
import { IUser } from './user.interface'
import { User } from './user.models'
import { gennerateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await gennerateUserId()

  user.id = id

  if (!user.password) {
    user.password = config.defaul_user_pass as string
  }

  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error(`Failed to Create User!`)
  }

  return createdUser
}

export default { createUser }
