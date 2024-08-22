import { FastifyReply, FastifyRequest } from "fastify";
import {upload as uploadService} from '../services/upload'

export async function upload(request: FastifyRequest, reply: FastifyReply) {
    const file = await request.file()

    console.log('fileName', file?.filename)

    if(!file?.file) return reply.status(400).send('No file received')

    

    await uploadService(file?.file as unknown as ReadableStream, file?.filename)
}