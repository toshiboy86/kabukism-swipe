import { Plugin } from '@nuxt/types'
import { getFileByPath, getFiles } from '@/hooks/utils'

const plugin: Plugin = ({ app }, inject) => {
  const playlist = JSON.parse(getFiles('playList/'))
  app.$playList = playlist
  // app.provide('$playList', playlist)
  inject('playList', playlist)
  const question = JSON.parse(getFileByPath('question.json'))
  app.$question = question
  inject('question', question)
  const playCategory = JSON.parse(getFileByPath('playCategory.json'))
  app.$playCategory = playCategory
  inject('playCategory', playCategory)
}

export default plugin
