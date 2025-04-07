import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '../src/style.css';
import App from './App.vue';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
