import { promises } from 'fs'

export const deleteFile = async (filePath: string) => {
  try {
    await promises.stat(filePath)
  } catch {
    return null
  }

  await promises.unlink(filePath)
  return null
}
