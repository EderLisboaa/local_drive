import fs from 'node:fs'
import { pipeline } from 'node:stream/promises'


export async function upload(file: ReadableStream, filename: string) {
  
  await pipeline(file, fs.createWriteStream(`./${filename}`))
}