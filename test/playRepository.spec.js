import data from '@/assets/playlist/latest.json'
import playRepository from '@/api/playRepository'


describe('play repository returns correct values', () => {
  test('show', () => {
    const part = 2
    const order = 1
    const all = new playRepository().all()
    const single = new playRepository().show(part, order)
    expect(single).toEqual(all[part][order])
  })
})
