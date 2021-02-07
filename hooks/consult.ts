import { Play, Preference, playCategory, Question } from '@/types'

export function consultPlays(preference: Preference, plays: Play[]) {
  plays.map(e => {
    console.log(e.show.part)
  })
  // console.log(plays)
  switch (preference.category) {
    case 'beginner':
      true
    break
  }
}
