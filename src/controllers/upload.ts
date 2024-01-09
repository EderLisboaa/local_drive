import { FastifyReply, FastifyRequest } from "fastify";
import {upload as uploadService} from '../services/upload'

export async function upload(request: FastifyRequest, reply: FastifyReply) {
    console.log('REQUESTTTTTTTTT')
    const file = await request.file({})

    console.log('file', file)

    if(!file?.file) return reply.status(400).send('No file received')

    await uploadService(file?.file, file?.filename)
}