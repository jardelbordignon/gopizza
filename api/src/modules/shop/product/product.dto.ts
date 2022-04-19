import { FilterableField } from '@nestjs-query/query-graphql'
import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql'
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'

import { SoftDTO } from 'src/base/shared/dtos/soft.dto'
import { UploadScalar } from 'src/base/shared/providers/StorageProvider/utils'

@ObjectType('Product')
export class ProductDTO extends SoftDTO {
  @FilterableField()
  name: string

  @FilterableField()
  description: string

  @Field()
  imageUrl?: string

  @FilterableField()
  priceSizeP: number

  @FilterableField()
  priceSizeM: number

  @FilterableField()
  priceSizeG: number
}

@InputType('CustomCreateOneProduct')
export class CustomCreateOneProductDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string

  @IsNotEmpty()
  description: string

  @IsNotEmpty()
  imageFile: UploadScalar

  @IsNumber()
  @IsNotEmpty()
  priceSizeP: number

  @IsNumber()
  @IsNotEmpty()
  priceSizeM: number

  @IsNumber()
  @IsNotEmpty()
  priceSizeG: number
}

@InputType('UpdateProduct')
export class CustomUpdateOneProductDTO extends PartialType(
  CustomCreateOneProductDTO
) {
  id: string
}
