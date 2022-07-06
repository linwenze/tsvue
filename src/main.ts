import { createApp ,toRaw} from 'vue';
import App from './App.vue';
import router from './router';
// import store from './store';
import { createPinia,PiniaPluginContext } from 'pinia'
type Option={
  key?:string
}
const __piniaKey__='lin'
const setStorage=(key:string, value:any)=>{
  localStorage.setItem(key,JSON.stringify(value))
}
const getStorage=(key:string)=>{
  return localStorage.getItem(key)?JSON.parse(localStorage.getItem(key) as string):{}
}
const piniaPlugin=(options:Option)=>{
return (context:PiniaPluginContext)=>{
  console.log(context,'content')
  const {store}=context
  const data=getStorage(`${options?.key??__piniaKey__}-${store.$id}`)
  store.$subscribe(()=>{
    setStorage(`${options?.key??__piniaKey__}-${store.$id}`,toRaw(store.$state))
  })
  console.log(store)
  return {
    ...data
  }
}
}
const store=createPinia()
store.use(piniaPlugin({
  key:'pinia'
}))
createApp(App).use(store).use(router).mount('#app');
