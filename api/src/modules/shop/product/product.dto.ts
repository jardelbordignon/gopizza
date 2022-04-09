import { FilterableField } from '@nestjs-query/query-graphql'
import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql'
import { IsNotEmpty, IsString, MaxLength } from 'class-validator'

import { SoftDTO } from 'src/base/shared/dtos/soft.dto'
import { UploadScalar } from 'src/base/shared/providers/StorageProvider/utils'

@ObjectType('Product')
export class ProductDTO extends SoftDTO {
  @FilterableField()
  name: string

  @Field()
  image?: string
}

@InputType('CreateProduct')
export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string

  imageFile: UploadScalar
}

@InputType('UpdateProduct')
export class UpdateProductDTO extends PartialType(CreateProductDTO) {}
