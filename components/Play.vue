<template>
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>
      <v-card-title>{{ play.title }}</v-card-title>
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
        </v-row>
        <div>第一部　{{ play.time }}～</div>
        <div class="my-4 subtitle-1">
          歌舞伎座
        </div>
        <div>{{ play.period }}</div>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-title>演目の特徴</v-card-title>
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip v-for="(value, key) in play.category" :key="key">{{ playCategories[value] }}</v-chip>
        </v-chip-group>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="reserve"
        >
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script lang="ts">
import { PropOptions } from 'vue';
import { defineComponent, PropType } from '@vue/composition-api'
import { Play } from '@/types.ts'
import { useFetchPlayCategories } from '@/hooks/fetchPlay'


export default defineComponent({
  name: "Play",
  props: {
    play: Object as PropType<Play>
  },
  setup (props) {
    const play = props.play
    const playCategories = useFetchPlayCategories()
    return { play, playCategories }
  }
})

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

#app {
  position: absolute;
  background-color: aliceblue;
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


</style>
