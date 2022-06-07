// 用户状态模块
import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    token: "",
    nickname: 10,
    avatar: "",
    roles: [],
    perms: [],
  }),
  actions: {
    /**
     * 用户登录请求
     * @param userInfo 登录用户信息
     *  username: 用户名
     *  password: 密码
     *  code: 验证码
     *  uuid: 匹配正确验证码的 key
     */
    login(formData: any) {
      // const { username, password } = formData;
      // return new Promise((resolve, reject) => {
      //     // code == 200
      //     if(username){
      //         const accessToken = 'token';
      //         localStorage.set('token', accessToken);
      //         this.roles=['ADMIN']
      //         this.token = accessToken;
      //         resolve(access_token);
      //     }
      // })
      // .catch(error => {
      //     reject(error);
      // });
    },
    /**
     *  获取用户信息（昵称、头像、角色集合、权限集合）
     */
    getUserInfo() {
      this.nickname =666
      // return new Promise(((resolve) => {
      //     resolve()
      // }))
    },
  },
});
