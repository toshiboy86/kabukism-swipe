export interface Play {
  period: String
  [key: number]: {
    time: String
    [key: number]: PlayContent
  }
}

interface PlayContent {
  title: string,
  category: playCategory[]
}

interface PlayType {
  comedy?: boolean
}

export interface playCategory {
  dance: string
  ordinaryDrama: string
  historyDrama: string
  aesthetics: string
  comedy: string
  tragic: string
  horror: string
  drama: string
  romance: string
  ghost: string
  action: string
  keren: string
  easy: string
  mask: string
  musical: string
  profound: string
  famous: string
  gorgeous: string
}
