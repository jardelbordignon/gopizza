import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserToken } from '../user-token/user-token.entity'
import { UserTokenService } from '../user-token/user-token.service'
import { User } from '../user/user.entity'
import { UserService } from '../user/user.service'

import { mailProviderConfig } from 'src/base/config/mailProvider'
import { IMailProvider } from 'src/base/shared/providers/MailProvider/IMailProvider'
import {
  EtherealMailProvider,
  MailtrapMailProvider,
  SESMailProvider,
} from 'src/base/shared/providers/MailProvider/implementations'

import { JwtStrategy } from './auth.jwt-strategy'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'

const loadMailProvider = () => {
  switch (mailProviderConfig.mailProvider) {
    case 'mailtrap':
      return MailtrapMailProvider
    case 'ses':
      return SESMailProvider
    default:
      return EtherealMailProvider
  }
}
@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserToken]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_ACCESS_SECRET,
        signOptions: {
          expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
        },
      }),
    }),
    loadMailProvider(),
  ],
  providers: [
    AuthResolver,
    AuthService,
    JwtStrategy,
    UserService,
    UserTokenService,
    { provide: IMailProvider, useClass: loadMailProvider() },
  ],
})
export class AuthModule {}
