// Import the framework and instantiate it
import { fastify } from 'fastify'
import multipartPlugin from '@fastify/multipart'

export async function startServer() {
  const server = fastify({
    logger: true
  })
  
  server
  // .register(multipartPlugin)
  .register(require('./routes'))

  try {
    await server.listen({ port: 3000, host: '0.0.0.0' })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}