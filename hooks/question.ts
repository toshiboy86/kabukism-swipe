import { playCategory, Question } from '@/types'

export function useFetchQuestions(playCategory: playCategory[], question: Question[]) {
  return { ...question, ...playCategory  }
}
