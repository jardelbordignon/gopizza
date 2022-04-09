import { resolve } from 'path'

import { v2 } from 'cloudinary'

import { IStorageProvider } from '../IStorageProvider'
import { UploadScalar, deleteFile, handleUpload, uploadsFolder } from '../utils'

import { cloudinaryCredentials } from 'src/base/config/storageProvider'

export class CloudinaryStorageProvider implements IStorageProvider {
  constructor() {
    v2.config(cloudinaryCredentials())
  }

  store = async (
    file: UploadScalar,
    folder: string,
    fileName?: string
  ): Promise<string> => {
    const filename = await handleUpload(file)

    const filePath = resolve(uploadsFolder, 'tmp', filename)

    // TODO: setar o fileName do arquivo no cloudinary
    const { secure_url } = await v2.uploader.upload(filePath, { folder })

    await deleteFile(filePath)

    return secure_url
  }

  destroy = async (folder: string, fileName: string): Promise<void> => {
    await v2.uploader.destroy(`${folder}/${fileName}`)
  }
}
