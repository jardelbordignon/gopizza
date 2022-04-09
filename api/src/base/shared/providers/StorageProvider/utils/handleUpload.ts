// Adaptação de https://github.com/jardelbordignon/apollo-upload-examples/blob/master/api/storeUpload.mjs
import { createWriteStream, existsSync, mkdirSync } from 'fs'
import { resolve } from 'path'

import { v4 as uuid } from 'uuid'

import { deleteFile } from './deleteFile'

export const uploadsFolder = resolve(
  __dirname,
  '..',
  '..',
  '..',
  '..',
  '..',
  '..',
  'uploads'
)

/**
 * Stores a GraphQL file upload in the filesystem.
 * @param {Promise<object>} file GraphQL file upload.
 * @returns {Promise<string>} Resolves the stored file name.
 */
export const handleUpload = async (file) => {
  const { createReadStream, filename } = await file
  const stream = createReadStream()
  const storedFileName = `${uuid()}-${filename}`

  const tmpFolder = resolve(uploadsFolder, 'tmp')
  if (!existsSync(tmpFolder)) mkdirSync(tmpFolder)

  const storedFilePath = `${tmpFolder}/${storedFileName}`

  // Store the file in the filesystem.
  await new Promise((resolve, reject) => {
    // Create a stream to which the upload will be written.
    const writeStream = createWriteStream(storedFilePath)

    // When the upload is fully written, resolve the promise.
    writeStream.on('finish', resolve)

    // If there's an error writing the file, remove the partially written file
    // and reject the promise.
    writeStream.on('error', (error) => {
      deleteFile(storedFilePath).then(() => reject(error))
    })

    // In Node.js <= v13, errors are not automatically propagated between piped
    // streams. If there is an error receiving the upload, destroy the write
    // stream with the corresponding error.
    stream.on('error', (error) => writeStream.destroy(error))

    // Pipe the upload into the write stream.
    stream.pipe(writeStream)
  })

  return storedFileName
}
