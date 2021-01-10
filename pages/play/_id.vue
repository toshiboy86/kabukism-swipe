<template>
  <div id="app">
    <play
      :play="play"
    />
  </div>
</template>
<script lang="ts">
import Play from '@/components/Play.vue'
import { defineComponent } from '@vue/composition-api'
import playRepository from '@/api/playRepository'
import { useFetchPlay } from '@/hooks/fetchPlay'

export default defineComponent({
  name: "Plays",
  components: {
    Play
  },
  setup() {
    const play = useFetchPlay(1, 1)
    return { play }
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
