import { resolve } from 'path'

import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compare } from 'bcryptjs'
import { v4 as uuid } from 'uuid'

import { UserTokenService } from '../user-token/user-token.service'
import { UserDTO } from '../user/user.dto'
import { UserService } from '../user/user.service'

import { IMailProvider } from 'src/base/shared/providers/MailProvider/IMailProvider'

import {
  LoginInputDTO,
  LogoutInputDTO,
  ResetPasswordInputDTO,
  SendPasswordResetEmailInputDTO,
} from './auth.dto'
import { AuthenticatedUser, LoginResponse } from './auth.type'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private userTokenService: UserTokenService,
    private jwtService: JwtService,
    private mailProvider: IMailProvider
  ) {}

  async logout({ userId }: LogoutInputDTO): Promise<void> {
    // delete the user refreshToken if it exists
    await this.userTokenService.deleteByUserId(userId)
  }

  async login({ email, password }: LoginInputDTO): Promise<LoginResponse> {
    // const [user] = await this.userService.query({ filter: { email: { eq: email } }, paging: { limit: 1 } })
    const user = await this.userService.findByEmail(email)

    if (!user)
      throw new UnauthorizedException('Email and password do not match')

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch)
      throw new UnauthorizedException('Email and password do not match')

    await this.logout({ userId: user.id })

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

  async sendPasswordResetEmail({ email }: SendPasswordResetEmailInputDTO) {
    const user = await this.userService.findByEmail(email)

    if (!user) {
      throw new UnauthorizedException('Email does not exists')
    }

    await this.logout({ userId: user.id })

    const refreshToken = uuid()

    const hour = 1000 * 60 * 60
    const expiresAt = new Date(Date.now() + 2 * hour)

    await this.userTokenService.createOne({
      userId: user.id,
      refreshToken,
      expiresAt,
    })

    const templatePath = resolve(
      'dist',
      'account',
      'auth',
      'view',
      'forgotPassword.hbs'
    )

    const variables = {
      name: user.name,
      link: `http://localhost:3000/password/reset/${refreshToken}`,
    }

    this.mailProvider.sendMail(
      email,
      'Recuperação de senha',
      variables,
      templatePath
    )
  }

  async resetPassword({ refreshToken, password }: ResetPasswordInputDTO) {
    const token = await this.userTokenService.findByRefreshToken(refreshToken)

    if (!token) throw new UnauthorizedException('Token is invalid')

    const expirationDate = new Date(token.expiresAt)
    const now = new Date()

    const tokenIsExpired = expirationDate < now

    if (tokenIsExpired) throw new UnauthorizedException('Token is invalid')

    const user = await this.userService.findById(token.userId)

    if (!user) throw new NotFoundException('User not found')

    await this.userService.updateOne(token.userId, { password })

    this.logout({ userId: token.userId })
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
