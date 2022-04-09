import { existsSync, mkdirSync, promises } from 'fs'
import { resolve } from 'path'

import { IStorageProvider } from '../IStorageProvider'
import { UploadScalar, deleteFile, handleUpload, uploadsFolder } from '../utils'

export class LocalStorageProvider implements IStorageProvider {
  async store(
    file: UploadScalar,
    folder: string,
    fileName?: string
  ): Promise<string> {
    const filename = await handleUpload(file)

    const name = fileName || filename

    const thisFolder = resolve(uploadsFolder, folder)
    if (!existsSync(thisFolder)) mkdirSync(thisFolder)

    promises.rename(
      resolve(uploadsFolder, 'tmp', filename),
      resolve(thisFolder, name)
    )

    return `${folder}/${name}`
  }

  async destroy(folder: string, fileName: string): Promise<void> {
    const filePath = resolve(uploadsFolder, folder, fileName)
    await deleteFile(filePath)
  }
}
