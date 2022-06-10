import { createApp } from 'vue';
import App from './App.vue';

// import 'lib-flexible/flexible.js'
import router from './router';
import { Button } from 'vant';
createApp(App).use(Button).use(router).mount('#app');
