import data from '@/assets/playlist/latest.json'
import playCategoryRepository from '@/api/playCategoryRepository'

describe('play category repository returns correct values', () => {
  test('show', () => {
    const all = new playCategoryRepository().all()
    const single = new playCategoryRepository().show('dance')
    expect(single).toEqual(all['dance'])
  })
})
