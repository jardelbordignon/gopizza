import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { static as publicFolder } from 'express'
import { graphqlUploadExpress } from 'graphql-upload'

import { AppModule } from './base/app/app.module'
import { uploadsFolder } from './base/shared/providers/StorageProvider/utils'

const PORT = Number(process.env.API_PORT || 3001)

async function bootstrap(): Promise<void> {
  const logger = new Logger('Bootstrap')

  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  app.use(graphqlUploadExpress({ maxFiles: 20, maxFileSize: 10000000 })) // 10 MB
  app.use('/images', publicFolder(uploadsFolder))

  app.listen(PORT).then(() => logger.log(`🚀 Server started on port ${PORT}`))
}

bootstrap()
