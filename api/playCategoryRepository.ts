import data from '@/assets/playCategory.json'
import { playCategory } from '@/types.ts'

export class playCategoryRepository {
  constructor() {}
  all(): playCategory {
    return data
  }

  show(key: keyof playCategory) {
    const all = this.all()
    return all[key]
  }
}

export default playCategoryRepository
