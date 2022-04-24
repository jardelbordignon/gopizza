import { UploadScalar } from './utils/Upload.scalar'

export interface IStorageProvider {
  store(files: UploadScalar[], folder: string): Promise<string[]>
  destroy(fileName: string): Promise<void>
}
