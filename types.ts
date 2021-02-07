export interface Play {
  show: {
    period: String
    time: String
    part: Array<PlayContent>
  }
}

interface PlayContent {
  title: string,
  category: Array<string>
}

interface categoryContent {
  title: string
  question: string
}
export interface playCategory {
  dance: categoryContent
  ordinaryDrama: categoryContent
  historyDrama: categoryContent
  music: categoryContent
  famous: categoryContent
  easy: categoryContent
  gorgeous: categoryContent
  // aesthetics: categoryContent
  // comedy: categoryContent
  // tragic: categoryContent
  // horror: categoryContent
  // drama: categoryContent
  // romance: categoryContent
  // ghost: categoryContent
  // action: categoryContent
  // keren: categoryContent
  // easy: categoryContent
  // mask: categoryContent
  // orchestra: categoryContent
  // famous: categoryContent
  // gorgeous: categoryContent
  // typical: categoryContent
  // amuse: categoryContent
}

export interface Question {
  beginner: categoryContent
  intermediate: categoryContent
}

export interface playPoint {
  frinedliness: Array<String>
}

export interface Preference {
  like: boolean
  category: string
}

export interface HashScore {
  [key:string]: number
}
