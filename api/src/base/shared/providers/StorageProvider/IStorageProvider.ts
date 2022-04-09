import { UploadScalar } from './utils/Upload.scalar'

export interface IStorageProvider {
  store(file: UploadScalar, folder: string, fileName?: string): Promise<string>
  destroy(folder: string, fileName: string): Promise<void>
}
