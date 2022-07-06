<template>
  <div class="home">
    <!-- {{nickname}} -->
    {{test.name}}
    {{test.current}}
    {{test.user.age}}
    {{test.getName}}
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <button @click="reset">重置</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

// import { useUserStore } from '@/store/user';
import {useTestStore} from '../store'
import {storeToRefs} from 'pinia'
// const userStore = useUserStore();

const count = 2
console.log(count)
export default defineComponent({
  name: 'Home',
  data() {
    return {
      count: 0,
      nickname:1,
      test:{}
      // name:userStore.nickname
    }
  },
  created(){
    
    // let user=useUserStore()
    // user.getUserInfo()
    this.test=useTestStore()
    const {current} =storeToRefs(useTestStore())
    setTimeout(()=>{
      current.value++
      useTestStore().getUser()
    },2000)
    //state发生变化监听
    useTestStore().$subscribe((args,state)=>{
      console.log('=====',args)
      console.log('=====',state)
    },{
      detached:true,//设置为TRUE销了也能监听
      deep:true,
    })
    //action发生变化监听 设置为TRUE销了也能监听
    useTestStore().$onAction((args)=>{
      console.log('===666==',args)
    },false)
    // this.nickname =user.nickname
    
  },
  methods:{
    reset(){
      useTestStore().$reset()
    }
  }
  // components: {
  //   HelloWorld
  // },
})
</script>
