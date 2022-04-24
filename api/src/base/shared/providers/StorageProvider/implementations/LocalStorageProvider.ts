import { mkdirSync } from 'fs'
import { resolve } from 'path'

import * as sharp from 'sharp'
import { v4 as uuid } from 'uuid'

import { IStorageProvider } from '../IStorageProvider'
import {
  UploadScalar,
  deleteFile,
  deleteFolder,
  handleUpload,
  mediasFolder,
} from '../utils'

import { env } from 'src/base/config/environment'
export class LocalStorageProvider implements IStorageProvider {
  async store(files: UploadScalar[], folder: string): Promise<string[]> {
    const thisFolder = resolve(mediasFolder, folder)

    const tmpFilePathsPromise = files.map((file) => handleUpload(file))

    return Promise.all(tmpFilePathsPromise).then((tmpFilePaths) =>
      tmpFilePaths.map((tmpFilePath) => {
        const subFolder = uuid().split('-')[1]
        const thisSubFolder = resolve(thisFolder, subFolder)
        mkdirSync(thisSubFolder, { recursive: true })

        Promise.all(
          [
            { width: 750, height: 750, name: 'l' },
            { width: 400, height: 400, name: 'm' },
            { width: 150, height: 150, name: 's' },
          ].map(({ width, height, name }) =>
            sharp(tmpFilePath)
              .resize(width, height)
              .toFile(`${thisSubFolder}/${name}.jpg`)
          )
        )
          .then(() => deleteFile(tmpFilePath))
          .catch((err) => console.log(err))

        return `${env.apiUrl}/medias/${folder}/${subFolder}/`
      })
    )
  }

  async destroy(path: string): Promise<void> {
    await deleteFolder(resolve(mediasFolder, path))
  }
}
