import { useFetchQuestionsFromPlay } from '@/hooks/fetchPlay'
import { getFiles, getFileByPath } from '@/hooks/utils'

describe('Fetch all questions associated in plays', () => {
  test('Get questions', () => {
    const playlist = JSON.parse(getFiles('playList/'))
    const question = JSON.parse(getFileByPath('question.json'))
    const categories = useFetchQuestionsFromPlay(playlist, question)
    expect(categories.length > 3).toBeTruthy()
  })
})
