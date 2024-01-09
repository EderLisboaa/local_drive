import {FastifyInstance} from 'fastify'
import { upload } from './controllers/upload'

export default async function (server: FastifyInstance, opts: any) {
  server.post('/', upload)
}