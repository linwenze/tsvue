import state from "./state";
// import { Toast } from 'vant';
// import { ElLoading } from 'element-plus';
const actions = {
  addCount() {
    state.count++;
  },
  openLoading() {
    if (!state.showLoading) {
      // Toast.loading({
      //   message: '加载中...',
      //   forbidClick: true,
      //   duration:0
      // });
      state.showLoading = true;
    }
  },
  closeLoading() {
    // Toast.clear()
    state.showLoading = false;
    // state.loadingInstance.close();
  },
};

// 同样需要导出类型
export default actions;
