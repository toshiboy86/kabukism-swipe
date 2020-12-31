import Vue from 'vue'
import playRepository from '@/api/playRepository'

export default (_: any, inject: any) => {
  inject('playRepo', new playRepository())
}
