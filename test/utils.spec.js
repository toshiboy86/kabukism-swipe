import { filterPlaysByHash, generateHashByPlaylist, getFiles } from '@/hooks/utils'
import { consultPlays } from '@/hooks/consult'
describe('generate hash object by playlist', () => {
  test('correct hash generation', () => {
    const playlist = JSON.parse(getFiles('playList/'))
    const hashObj = generateHashByPlaylist(playlist)
    let cnt = 0
    playlist.map(e => {
      cnt = cnt + e.show.part.length
    })
    expect(Object.entries(hashObj).length).toBe(cnt)
  })

  test('filterPlaysByHash should return the only qualified plays', () => {
    const playlist = JSON.parse(getFiles('playList/'))
    const hashObj = generateHashByPlaylist(playlist)
    const filtered = filterPlaysByHash(playlist, Object.keys(hashObj)[3])
    expect(filtered.length).toBe(1)
    expect(filtered[0].show.part.length).toBe(1)
    expect(typeof filtered[0].show.part[0].title).toBe('string')
  })
})
