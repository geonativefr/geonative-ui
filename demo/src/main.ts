import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '@/style.css'; // Fixed path
import App from '@demo/App.vue';
import routes from '@demo/routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');

