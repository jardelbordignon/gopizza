import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { UserDTO } from '../user/user.dto'

import {
  LoginInputDTO,
  LogoutInputDTO,
  ResetPasswordInputDTO,
  SendPasswordResetEmailInputDTO,
} from './auth.dto'
import { JwtAuthGuard } from './auth.guard'
import { AuthService } from './auth.service'
import { AuthenticatedUser, LoginResponse } from './auth.type'
import { CurrentUser } from './current-user.decorator'

@Resolver()
export class AuthResolver {
  constructor(private service: AuthService) {}

  @Mutation(() => LoginResponse)
  async login(@Args('input') input: LoginInputDTO): Promise<LoginResponse> {
    return this.service.login(input)
  }

  @Mutation(() => Boolean)
  logout(@Args('input') input: LogoutInputDTO): boolean {
    this.service.logout(input)
    return true
  }

  @Mutation(() => Boolean)
  async sendPasswordResetEmail(
    @Args('input') input: SendPasswordResetEmailInputDTO
  ): Promise<boolean> {
    this.service.sendPasswordResetEmail(input)
    return true
  }

  @Mutation(() => Boolean)
  async resetPassword(
    @Args('input') input: ResetPasswordInputDTO
  ): Promise<boolean> {
    this.service.resetPassword(input)
    return true
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => UserDTO)
  me(@CurrentUser() user: AuthenticatedUser): Promise<UserDTO> {
    return this.service.currentUser(user)
  }
}
