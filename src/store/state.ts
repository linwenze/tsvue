import { reactive } from "vue";

// 使用 reactive 函数完成响应式转换
const state = reactive({
  count: 1,
  showLoading:false,
  loadingInstance:{}
  
});

export default state;