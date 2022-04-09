import { provider } from 'src/base/config/storageProvider'

import { CloudinaryStorageProvider } from './CloudinaryStorageProvider'
import { LocalStorageProvider } from './LocalStorageProvider'

export const StorageProvider =
  provider === 'cloudinary' ? CloudinaryStorageProvider : LocalStorageProvider

export const storageProvider = new StorageProvider()
