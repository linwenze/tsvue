import state from "@/store/state";
import action from "@/store/action";
export default {
  install: (app: any) => {
    app.config.globalProperties.$state = state;
    app.config.globalProperties.$action = action;
  },
};
