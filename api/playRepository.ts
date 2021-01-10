import data from '@/assets/playlist/latest.json'

interface Play {
  period: String
  [key: number]: {
    time: String
    [key: number]: PlayContent
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

  show(part: number, order?: number) {
    const all = this.all()
    return order ? all[part][order] : all[part]
  }
}

export default playRepository
