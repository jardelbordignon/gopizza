import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compare } from 'bcryptjs'

import { UserTokenService } from '../user-token/user-token.service'
import { UserDTO } from '../user/user.dto'
import { UserService } from '../user/user.service'

import { LoginInputDTO, LogoutInputDTO } from './auth.dto'
import { AuthenticatedUser, LoginResponse } from './auth.type'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private userTokenService: UserTokenService,
    private jwtService: JwtService
  ) {}

  logout({ userId }: LogoutInputDTO): void {
    // delete the user refreshToken if it exists
    this.userTokenService.deleteByUserId(userId)
  }

  async login({ email, password }: LoginInputDTO): Promise<LoginResponse> {
    // const [user] = await this.userService.query({ filter: { email: { eq: email } }, paging: { limit: 1 } })
    const user = await this.userService.findByEmail(email)

    if (!user)
      throw new UnauthorizedException('Email and password do not match')

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch)
      throw new UnauthorizedException('Email and password do not match')

    this.logout({ userId: user.id })

    // generate new tokens
    const accessPayload = { sub: user.id }
    const refreshPayload = { sub: user.id, email: user.email }

    const accessToken = await this.jwtService.signAsync(accessPayload)
    const refreshToken = await this.jwtService.signAsync(refreshPayload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: `${process.env.JWT_REFRESH_EXPIRES_IN_DAYS}d`,
    })

    const day = 1000 * 60 * 60 * 24
    const expiresAt = new Date(
      Date.now() + Number(process.env.JWT_REFRESH_EXPIRES_IN_DAYS) * day
    )

    // save the new refresh token
    await this.userTokenService.createOne({
      userId: user.id,
      refreshToken,
      expiresAt,
    })

    const tokens = { accessToken, refreshToken }

    return { user, tokens }
  }

  async currentUser(authUser: AuthenticatedUser): Promise<UserDTO> {
    try {
      const user = await this.userService.getById(authUser.id)
      return user
    } catch (e) {
      throw new UnauthorizedException()
    }
  }
}
