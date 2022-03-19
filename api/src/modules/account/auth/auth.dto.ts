import { Field, InputType } from '@nestjs/graphql'
import { IsEmail, IsString, IsUUID } from 'class-validator'

@InputType('LoginInput')
export class LoginInputDTO {
  @Field()
  @IsEmail()
  email!: string

  @Field()
  @IsString()
  password?: string
}

@InputType('LogoutInput')
export class LogoutInputDTO {
  @Field()
  @IsUUID()
  userId!: string
}
