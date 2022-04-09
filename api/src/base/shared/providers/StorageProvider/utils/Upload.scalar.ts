import { Stream } from 'stream'

import { Scalar } from '@nestjs/graphql'
import { GraphQLUpload } from 'graphql-upload'

@Scalar('UploadScalar')
export class UploadScalar {
  parseValue = (value) => GraphQLUpload.parseValue(value)
  serialize = (value) => GraphQLUpload.serialize(value)
  parseLiteral = (ast) => GraphQLUpload.parseLiteral(ast, ast.value)

  createReadStream = () => Stream

  filename: string
  mimetype: string
  encoding: string
}
