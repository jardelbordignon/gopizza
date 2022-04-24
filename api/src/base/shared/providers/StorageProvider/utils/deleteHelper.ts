import {
  existsSync,
  promises,
  readdirSync,
  rmdirSync,
  statSync,
  unlinkSync,
} from 'fs'

export const deleteFile = async (path: string) => {
  try {
    await promises.stat(path)
  } catch {
    return null
  }

  await promises.unlink(path)
  return null
}

export const deleteFolder = async (path: string) => {
  if (existsSync(path)) {
    const files = readdirSync(path)

    if (files.length) {
      files.forEach((fileSrc) => {
        if (statSync(path + '/' + fileSrc).isDirectory()) {
          deleteFolder(path + '/' + fileSrc)
        } else {
          unlinkSync(path + '/' + fileSrc)
        }
      })
      rmdirSync(path)
    } else {
      rmdirSync(path)
    }
  } else {
    console.log('Folder does not exist.')
  }
}
