import { FilterableField } from '@nestjs-query/query-graphql'
import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql'
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator'

import { SoftDTO } from 'src/base/shared/dtos/soft.dto'

@ObjectType('Order')
export class OrderDTO extends SoftDTO {
  @FilterableField()
  userId: string

  amount: number
  image: string

  @FilterableField()
  pizza: string

  quantity: number
  size: string

  @FilterableField()
  status: string

  @FilterableField()
  table: number
}

@InputType('CreateOrder')
export class CreateOrderDTO {
  @IsUUID()
  @IsNotEmpty()
  userId: string

  @IsNotEmpty()
  @IsNumber()
  amount: number

  @IsNotEmpty()
  @IsString()
  image: string

  @IsNotEmpty()
  @IsString()
  pizza: string

  @IsNotEmpty()
  @IsNumber()
  quantity: number

  @IsNotEmpty()
  @IsString()
  @MaxLength(1)
  size: string

  @IsNotEmpty()
  @IsString()
  status: string

  @IsNotEmpty()
  @IsNumber()
  table: number
}

@InputType('UpdateOrder')
export class UpdateOrderDTO extends PartialType(CreateOrderDTO) {
  id: string
}

@InputType('DeleteOrder')
export class DeleteOrderDTO {
  id: string
  isSoft?: boolean
}
