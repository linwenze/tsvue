import {defineStore} from 'pinia'
import {Name} from './store-name'
type User={
  age:number,
  name:string
}
const login=():Promise<User> =>{
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve({age:8888333,name:'6666'})
    },2000)
  })
}

export const useTestStore=defineStore(Name.TEST,{
  state:()=>{
    return {
      current:1,
      name:'test',
      user:<User>{}
    }
  },
  getters:{
    getName():string{
      return `${this.getAge}-------444444`
    },
    getAge():number{
      return this.user.age+100000
    }
  },
  actions:{
    async getUser(){
      const res:User=await login()
      this.user=res
      console.log(this.user)
    }
  }
})