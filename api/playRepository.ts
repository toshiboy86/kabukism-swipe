// import data from '@/assets/playlist/latest.json'
import { Play } from '@/types.ts'

export class playRepository {
  data: Play[]
  constructor(play: Play[]) {
    this.data = play
  }

  all(): Play[] {
    return this.data
  }

  show(part: number, order?: number) {
    // const playToStr = this.data[part] as unknown as string
    return order ? this.data[part].show.part[order] : this.data[part].show.part
  }

  showPlays() {
    return this.data.map(e =>
      JSON.parse(e as unknown as string)
    )
  }
}

export default playRepository
