import { FilterableField } from '@nestjs-query/query-graphql'
import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql'
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'

import { SoftDTO } from 'src/base/shared/dtos/soft.dto'
import { UploadScalar } from 'src/base/shared/providers/StorageProvider/utils'

@ObjectType('Product')
export class ProductDTO extends SoftDTO {
  @FilterableField()
  description: string

  @Field(() => [String])
  imageDirs?: string[]

  @FilterableField()
  name: string

  @FilterableField()
  priceSizeL: number

  @FilterableField()
  priceSizeM: number

  @FilterableField()
  priceSizeS: number
}

@InputType('CreateProduct')
export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string

  @IsNotEmpty()
  description: string

  @IsNotEmpty()
  imageFiles: UploadScalar[]

  @IsNumber()
  @IsNotEmpty()
  priceSizeL: number

  @IsNumber()
  @IsNotEmpty()
  priceSizeM: number

  @IsNumber()
  @IsNotEmpty()
  priceSizeS: number
}

@InputType('UpdateProduct')
export class UpdateProductDTO extends PartialType(CreateProductDTO) {
  id: string
  currentImageDirs?: string[]
}

@InputType('DeleteProduct')
export class DeleteProductDTO {
  id: string
  isSoft?: boolean
}
