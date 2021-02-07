import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import { HashScore, Play } from '@/types'


const targetFolder = './assets/';

export const getFiles = (directory: string) : string => {
  const dir = path.resolve(targetFolder, directory)
  const stringArr = fs.readdirSync(dir).map(
    f => JSON.parse(fs.readFileSync(`${dir}/${f}`, 'utf-8'))
  )
  return JSON.stringify(stringArr)
}

export const getFileByPath = (path: string) : string => {
  const stringArr = JSON.parse(fs.readFileSync(`${targetFolder}${path}`, 'utf-8'))
  return JSON.stringify(stringArr)
}

export const generateHashByPlaylist = (plays: Play[]) : HashScore => {
  const hashObj: HashScore = {}
  plays.map(e => {
    e.show.part.map(play => {
      const uniqPlay = e.show.time.concat(play.title)
      hashObj[generateSha256(uniqPlay)] = 0
    })
  })
  return hashObj
}

export const filterPlaysByHash = (plays: Play[], hash: string) : Play[] => {
  const hashObj: HashScore = {}
  let filteredPlay: Play[] = new Array()
  plays.map((e, i) => {
    const filtered = e.show.part.filter((play, idx) => {
      const uniqPlay = e.show.time.concat(play.title)
      const generatedHash = generateSha256(uniqPlay)
      return (generatedHash === hash)
    })
    if (filtered.length >= 1) {
      filteredPlay.push({ show: e.show })
      filteredPlay[0]['show']['part'] = filtered // FIXME: i key array should be updated
      return filteredPlay
    }
  })
  return filteredPlay
}

export const generateSha256 = (str: string) : string => {
  return crypto.createHash('sha256').update(str, 'utf8').digest('hex')
}
