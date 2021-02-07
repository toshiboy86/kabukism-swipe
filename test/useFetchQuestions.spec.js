import { useFetchQuestions } from '@/hooks/question'
import { getFiles, getFileByPath } from '@/hooks/utils'

describe('Fetch all questions associated in plays', () => {
  test('Get questions', () => {
    const playCategory = JSON.parse(getFileByPath('playCategory.json'))
    const question = JSON.parse(getFileByPath('question.json'))
    const questions = useFetchQuestions(playCategory, question)
    expect(Object.keys(questions).length > 3).toBeTruthy()
  })
})
