// Adaptação de https://github.com/jardelbordignon/apollo-upload-examples/blob/master/api/storeUpload.mjs
import { createWriteStream, existsSync, mkdirSync } from 'fs'
import { resolve } from 'path'

import { v4 as uuid } from 'uuid'

import { deleteFile } from './deleteHelper'

export const mediasFolder = resolve(
  __dirname,
  '..',
  '..',
  '..',
  '..',
  '..',
  '..',
  'medias'
)

/**
 * Stores a GraphQL file upload in the filesystem.
 * @param {Promise<object>} file GraphQL file upload.
 * @returns {Promise<string>} Resolves the stored file name.
 */
export const handleUpload = async (file) => {
  const { createReadStream, filename } = await file
  const stream = createReadStream()
  const tmpFileName = `${uuid()}${filename}`

  const tmpFolder = resolve(mediasFolder, 'tmp')
  if (!existsSync(tmpFolder)) mkdirSync(tmpFolder, { recursive: true })

  const tmpFilePath = `${tmpFolder}/${tmpFileName}`

  // Store the file in the filesystem.
  await new Promise((resolve, reject) => {
    // Create a stream to which the upload will be written.
    const writeStream = createWriteStream(tmpFilePath)

    // When the upload is fully written, resolve the promise.
    writeStream.on('finish', resolve)

    // If there's an error writing the file, remove the partially written file
    // and reject the promise.
    writeStream.on('error', (error) => {
      deleteFile(tmpFilePath).then(() => reject(error))
    })

    // In Node.js <= v13, errors are not automatically propagated between piped
    // streams. If there is an error receiving the upload, destroy the write
    // stream with the corresponding error.
    stream.on('error', (error) => writeStream.destroy(error))

    // Pipe the upload into the write stream.
    stream.pipe(writeStream)
  })

  return tmpFilePath
}
