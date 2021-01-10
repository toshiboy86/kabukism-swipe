import playRepository from '@/api/playRepository'
import playCategoryRepository from '@/api/playCategoryRepository'
import { playCategory } from '@/types'

export function useFetchPlay(part: number, order?: number) {
  const playRepo = new playRepository()
  const allPlay = playRepo.all()
  const singlePlay = playRepo.show(part, order)
  const play = { ...singlePlay, period: allPlay.period, time: allPlay[1].time }
  return play
}

export function useFetchPlayCategories() :playCategory  {
  const cat = new playCategoryRepository()
  return cat.all()
}
