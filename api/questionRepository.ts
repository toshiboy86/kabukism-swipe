import { playPoint } from '@/types.ts'
import data from '@/assets/question.json'

export class questionRepository {
  data: playPoint
  constructor() {
    this.data = data
  }

  all(): playPoint {
    return this.data
  }
}

export default questionRepository
