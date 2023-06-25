import { createApp } from 'vue'; // @ts-ignore
import App from './app.vue';
import { router } from '@renderer/router';
import pinia from './stores';
// import './assets/css/index.css';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(router).use(pinia).mount('#app');
