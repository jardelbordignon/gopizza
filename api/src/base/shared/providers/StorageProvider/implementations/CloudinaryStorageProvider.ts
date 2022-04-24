import { resolve } from 'path'

import { v2 } from 'cloudinary'

import { IStorageProvider } from '../IStorageProvider'
import { UploadScalar, deleteFile, handleUpload, mediasFolder } from '../utils'

import { cloudinaryCredentials } from 'src/base/config/storageProvider'

export class CloudinaryStorageProvider implements IStorageProvider {
  constructor() {
    v2.config(cloudinaryCredentials())
  }

  async store(files: UploadScalar[], folder: string): Promise<string[]> {
    const filename = await handleUpload(files[0])

    const filePath = resolve(mediasFolder, 'tmp', filename)

    // TODO: setar o fileName do arquivo no cloudinary
    const { secure_url } = await v2.uploader.upload(filePath, { folder })

    await deleteFile(filePath)

    return [secure_url]
  }

  async destroy(fileName: string): Promise<void> {
    await v2.uploader.destroy(fileName)
  }
}
