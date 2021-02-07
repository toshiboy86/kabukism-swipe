<template>
  <div id="app">
    <client-only>
      <tinder ref="tinder" key-name="id" :queue.sync="queue" :offset-y="10" @submit="onSubmit">
        <template slot-scope="scope">
          <div class="question-top"></div>
            <v-card
              class="mx-auto"
              max-width="400"
              height="33%"
            >
              <v-card-text class="headline font-weight-bold">
                {{questions[scope.data.id].question}}
              </v-card-text>
            </v-card>
          <div class="question-buttom"></div>
          <div class="btns">
            <!-- <img src="./assets/rewind.png" @click="decide('rewind')"> -->
            <img src="@/assets/nope.png" @click="decide('nope')">
            <!-- <img src="./assets/super-like.png" @click="decide('super')"> -->
            <img src="@/assets/like.png" @click="decide('like')">
            <!-- <img src="./assets/help.png" @click="decide('help')"> -->
          </div>
        </template>
      </tinder>
    </client-only>
  </div>
</template>

<script>
import Tinder from "vue-tinder";
// import { computed, defineComponent } from '@vue/composition-api'
import { useFetchQuestionsFromPlay } from "@/hooks/fetchPlay"
import { useFetchQuestions } from "@/hooks/question"
import { generateHashByPlaylist } from '@/hooks/utils'

// type Category = Array<string>

export default {
  name: "App",
  components: { Tinder },
  data: () => ({
    // queue: [],
    // offset: 0,
    // history: [],
    // categories: [''],
    // questions: {}
  }),
  asyncData({ app }) {
    const categories = useFetchQuestionsFromPlay(app.$playList, app.$question)
    const questions = useFetchQuestions(app.$playCategory, app.$question)
    return { queue: categories, questions: questions, plays: app.$playList }
  },
  methods: {
    // mock(count = 5, append = true) {
    //   const list = [];
    //   for (let i = 0; i < count; i++) {
    //     list.push({ id: source[this.offset] });
    //     this.offset++;
    //   }
    //   if (append) {
    //     this.queue = this.queue.concat(list);
    //   } else {
    //     this.queue.unshift(...list);
    //   }
    // },
    onSubmit(choice) {
      console.log(generateHashByPlaylist(this.plays))
      console.log(this.plays)

      if (this.queue.length < 3) {
        // this.mock();
      }
      // this.history.push(item);
    },
    async decide(choice) {
      if (choice === "rewind") {
        if (this.history.length) {
          this.$refs.tinder.rewind([this.history.pop()]);
        }
      } else if (choice === "help") {
        window.open("https://shanlh.github.io/vue-tinder");
      } else {
        this.$refs.tinder.decide(choice);
      }
    }
  }
}


// const source = [
//   "AdelieBreeding_ZH-CN1750945258",
//   "BarcolanaTrieste_ZH-CN5745744257",
//   "RedRocksArches_ZH-CN5664546697",
//   "NationalDay70_ZH-CN1636316274",
//   "LofotenSurfing_ZH-CN5901239545",
//   "UgandaGorilla_ZH-CN5826117482",
//   "FeatherSerpent_ZH-CN5706017355",
//   "VancouverFall_ZH-CN9824386829",
// ]

// // type Props = {
// //   history: Array<any>;
// // };

// export default defineComponent({
//   name: "App",
//   components: { Tinder },
//   props: {
//     history: {
//       type: Array,
//       'default': () => ([''])
//     }
//   },
//   setup(props, context) {
//     // const categories = useFetchQuestionsFromPlay(context.$playList, context.$question)
//     // const questions = useFetchQuestions(context.$playCategory, context.$question)

//     const questions = computed(() => {
//       const queue = [
//         { id: 'AdelieBreeding_ZH-CN1750945258' },
//         { id: 'BarcolanaTrieste_ZH-CN5745744257' },
//         { id: 'RedRocksArches_ZH-CN5664546697' },
//         { id: 'NationalDay70_ZH-CN1636316274' },
//         { id: 'LofotenSurfing_ZH-CN5901239545' }
//       ]
//       return queue
//     })
//     const decide = computed((choice) => {
//       console.log('decide')
//     })
//     // const onSubmit = computed(( { item } ) => {
//     //   // props.history.push(item)
//     //   // history.push(item);
//     //   // this.$refs.tinder
//     //   // this.history().push(item)
//     //   // return true
//     // })
//     // return { queue: categories, questions: questions, onSubmit, decide }
//     return { decide, questions, queue: questions }
//   },
//   methods: {
//     onSubmit (choice) {
//       console.log(choice)
//       // this.history.push(choice)
//     }
//   }
// })

</script>

<style>
html,
body {
  height: 100%;
}

body {
  margin: 0;
  background-color: #20262e;
  overflow: hidden;
}

#app .vue-tinder {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 23px;
  margin: auto;
  width: calc(100% - 20px);
  height: calc(100% - 23px - 65px - 47px - 16px);
  min-width: 300px;
  max-width: 355px;
}

.nope-pointer,
.like-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  width: 64px;
  height: 64px;
}

.nope-pointer {
  right: 10px;
}

.like-pointer {
  left: 10px;
}

.super-pointer {
  position: absolute;
  z-index: 1;
  bottom: 80px;
  left: 0;
  right: 0;
  margin: auto;
  width: 112px;
  height: 78px;
}

.rewind-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 10px;
  width: 112px;
  height: 78px;
}

.pic {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.btns {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
  margin: auto;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  max-width: 355px;
}

.btns img {
  margin-right: 12px;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.btns img:nth-child(2n + 1) {
  width: 53px;
}

.btns img:nth-child(2n) {
  width: 65px;
}

.btns img:nth-last-child(1) {
  margin-right: 0;
}

.question-top {
  /* padding-top: 200px; */
  height: 33%;
  background-color: #ad4e2a;
}

.question-buttom{
  /* padding-bottom: 300px; */
  height: 33%;
  background: black;
}
</style>
