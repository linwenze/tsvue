<template>
  <div class="home">
    {{$state.count}}
    <button @click="test">fdfd</button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import action from "@/store/action";
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    test(){
      action.addCount()
    }
  },
  // created(){
    
  // }
})
</script>
