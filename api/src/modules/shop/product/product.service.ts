import { QueryService } from '@nestjs-query/core'
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm'
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { storageProvider } from 'src/base/shared/providers/StorageProvider/implementations'
import { deleteFolder } from 'src/base/shared/providers/StorageProvider/utils'

import {
  CreateProductDTO,
  DeleteProductDTO,
  ProductDTO,
  UpdateProductDTO,
} from './product.dto'
import { Product } from './product.entity'

@Injectable()
@QueryService(Product)
export class ProductService extends TypeOrmQueryService<Product> {
  constructor(@InjectRepository(Product) repo: Repository<Product>) {
    super(repo, { useSoftDelete: true })
  }

  async createProduct(input: CreateProductDTO): Promise<ProductDTO> {
    const product = this.repo.create(input)

    const folder = `products/${product.id}`
    product.imageDirs = await storageProvider.store(input.imageFiles, folder)

    return this.repo.save(product)
  }

  async updateProduct(input: UpdateProductDTO): Promise<ProductDTO> {
    const currentProduct = await this.repo.findOne(input.id)

    if (!currentProduct) throw new NotFoundException('Product not found')

    const product = Object.assign(currentProduct, input)

    if (input.currentImageDirs) {
      product.imageDirs
        .filter((dir) => !input.currentImageDirs.includes(dir))
        .forEach((dir) => storageProvider.destroy(dir.split('/medias/')[1]))

      product.imageDirs = input.currentImageDirs
    }

    if (input.imageFiles) {
      const folder = `products/${product.id}`
      const imageDirs = await storageProvider.store(input.imageFiles, folder)

      product.imageDirs = [...product.imageDirs, ...imageDirs]
    }

    return this.repo.save(product)
  }

  async deleteProduct(input: DeleteProductDTO): Promise<boolean> {
    const product = await this.repo.findOne(input.id)

    if (!product) throw new NotFoundException('Product not found')

    if (input.isSoft) {
      product.deletedAt = new Date()
      return !!this.repo.save(product)
    }

    if (product.imageDirs) storageProvider.destroy(`products/${product.id}`)

    return !!this.repo.delete(input.id)
  }
}
