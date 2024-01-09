import fs from 'node:fs'
import util from 'node:util'
import { pipeline } from 'node:stream/promises'
import { Stream } from 'node:stream'


export async function upload(file: any, filename: string) {
  
  await pipeline(file, fs.createWriteStream(`./uploads/${filename}`))
}