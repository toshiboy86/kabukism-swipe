import playRepository from '@/api/playRepository'
import playCategoryRepository from '@/api/playCategoryRepository'
import { Play, playCategory, Question } from '@/types'

export function useFetchPlay(part: number, order?: number) {
  // const playRepo = new playRepository()
  // const allPlay = playRepo.all()
  // const singlePlay = playRepo.show(part, order)
  // const play = { ...singlePlay, period: allPlay[0].show.period, time: allPlay[part].show.time }
  const play = [2,4]
  return play
}

export function useFetchPlayCategories() :playCategory  {
  const cat = new playCategoryRepository()
  return cat.all()
}

export function useFetchQuestionsFromPlay(play: Play[], question: Question) {
  const plays = new playRepository(play).all()
  const playCategory = extractCategoriesFromPlays(plays)
  const categories = Object.keys(question).concat(playCategory)
  return categories.map(e => {
    return {id: e}
  })
}

function extractCategoriesFromPlays(plays: Play[]) {
  const dupCategories = plays.flatMap(e =>
    e.show.part.flatMap(p => p.category.flat())
  )
  const categories = dupCategories.filter((item, pos) => {
    return dupCategories.indexOf(item) === pos
  })
  return categories
}
