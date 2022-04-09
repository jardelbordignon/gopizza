// import { IStorageProvider } from './IStorageProvider'

// export class FakeStorageProvider implements IStorageProvider {
//   private storage: string[] = []

//   public store = async (file: string): Promise<string> => {
//     this.storage.push(file)

//     return file
//   }

//   public destroy = async (file: string): Promise<void> => {
//     const findIndex = this.storage.findIndex(
//       (storedFile) => storedFile === file
//     )

//     this.storage.splice(findIndex, 1)
//   }
// }
