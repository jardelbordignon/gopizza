import { Module } from '@nestjs/common'

import { StorageProvider } from 'src/base/shared/providers/StorageProvider/implementations'
import { UploadScalar } from 'src/base/shared/providers/StorageProvider/utils'

import { AccountModule } from './account/account.module'
import { ShopModule } from './shop/shop.module'

@Module({
  imports: [AccountModule, ShopModule],
  providers: [UploadScalar, StorageProvider],
})
export class ModulesModule {}
