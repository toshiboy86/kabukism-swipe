import data from '@/assets/playlist/latest.json'

interface Play {
  [key: string]: {
    [key: string]: PlayContent
  }
}

interface PlayContent {
  title: string
}

export class playRepository {
  constructor() {}
  all(): Play {
    return data.playlist
  }

  show(part: string, order: string) {
    const all = this.all()
    return all[part][order]
  }
}

export default playRepository
