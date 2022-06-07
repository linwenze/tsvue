import useUserStore from "./modules/user";
// import usePermissionStore from './modules/permission';

const useStore = () => ({
  user: useUserStore(),
  // permission: usePermissionStore(),
});

export default useStore;
