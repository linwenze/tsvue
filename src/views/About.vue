<template>
  <div class="about">
    {{nickname}}
    
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { useUserStore } from '@/store/user';
export default defineComponent({
  name: 'about',
  data() {
    return {
      count: 0,
      nickname:1
      // name:userStore.nickname
    }
  },
  created(){
    useUserStore().nickname=200
    this.nickname =useUserStore().nickname
    
  }
  // components: {
  //   HelloWorld
  // },
})
</script>
