<template>
  <div class="home">
    {{nickname}}
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

import { useUserStore } from '@/store/user';
// const userStore = useUserStore();

const count = 2
console.log(count)
export default defineComponent({
  name: 'Home',
  data() {
    return {
      count: 0,
      nickname:1
      // name:userStore.nickname
    }
  },
  created(){
    this.nickname =useUserStore().nickname
    useUserStore().nickname=200
  }
  // components: {
  //   HelloWorld
  // },
})
</script>
