import {
    defineStore
} from 'pinia';
import {
    constantRoutes
} from '../../router';
// 加载动态模型
// const modules =
//     import.meta.glob('../../views/**/**.vue');
export const Layout = () => import('../../layout/index.vue');
// 路由
import listRoutes from '../../utils/routes';

const hasPermission = (roles, route) => {
    if (route.meta && route.meta.roles) {
        if (roles.includes('ROOT')) {
            return true;
        }
        return roles.some(role => {
            if (route.meta?.roles !== undefined) {
                return (route.meta.roles).includes(role);
            }
        });
    }
    return false;
};

export const filterAsyncRoutes = (routes, roles) => {
    const res = [];
    routes.forEach(route => {
        const tmp = {
            ...route
        };
        if (hasPermission(roles, tmp)) {
            if (tmp.component == 'Layout') {
                tmp.component = Layout;
            } else {
                // const component = modules[`../../views/${tmp.component}.vue`];
                const component = import(`../../views/${tmp.component}.vue`);
                if (component) {
                    tmp.component = import(`../../views/${tmp.component}.vue`);
                } else {
                    // tmp.component = modules[`../../views/error-page/404.vue`];
                }
            }
            res.push(tmp);

            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles);
            }
        }
    });
    return res;
};

const usePermissionStore = defineStore({
    id: 'permission',
    state: () => ({
        routes: [],
        addRoutes: []
    }),
    actions: {
        setRoutes(routes) {
            this.addRoutes = routes;
            this.routes = constantRoutes.concat(routes);
        },
        generateRoutes(roles) {
            return new Promise((resolve, reject) => {
                if (listRoutes) {
                    const accessedRoutes = filterAsyncRoutes(listRoutes, roles);
                    this.setRoutes(accessedRoutes);
                    resolve(accessedRoutes);
                } else {
                    reject();
                }
                // listRoutes()
                //     .then(response => {
                //         const asyncRoutes = response.data;
                //         const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
                //         this.setRoutes(accessedRoutes);
                //         resolve(accessedRoutes);
                //     })
                //     .catch(error => {
                //         reject(error);
                //     });
            });
        }
    }
});

export default usePermissionStore;