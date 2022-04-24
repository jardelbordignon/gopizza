import { QueryService } from '@nestjs-query/core'
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm'
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { storageProvider } from 'src/base/shared/providers/StorageProvider/implementations'

import {
  CustomCreateOneProductDTO,
  CustomUpdateOneProductDTO,
  ProductDTO,
} from './product.dto'
import { Product } from './product.entity'

@Injectable()
@QueryService(Product)
export class ProductService extends TypeOrmQueryService<Product> {
  constructor(@InjectRepository(Product) repo: Repository<Product>) {
    super(repo, { useSoftDelete: true })
  }

  async customCreateOneProduct(
    input: CustomCreateOneProductDTO
  ): Promise<ProductDTO> {
    const product = this.repo.create(input)

    const folder = `products/${product.id}`
    product.imageDirs = await storageProvider.store(input.imageFiles, folder)

    return this.repo.save(product)
  }

  async customUpdateOneProduct(
    input: CustomUpdateOneProductDTO
  ): Promise<ProductDTO> {
    const currentProduct = await this.repo.findOne(input.id)

    if (!currentProduct) throw new NotFoundException('Product not found')

    const product = Object.assign(currentProduct, input)

    if (input.imageFiles || input.currentImageDirs) {
      if (input.currentImageDirs) {
        const deletedImageDirs = product.imageDirs.filter(
          (imageDir) => !input.currentImageDirs.includes(imageDir)
        )

        deletedImageDirs.forEach((imageDir) => {
          storageProvider.destroy(imageDir.split('/medias/')[1])
        })

        product.imageDirs = input.currentImageDirs
      }

      if (input.imageFiles) {
        const folder = `products/${product.id}`
        const imageDirs = await storageProvider.store(input.imageFiles, folder)

        product.imageDirs = [...product.imageDirs, ...imageDirs]
      }
    }

    return this.repo.save(product)
  }
}
