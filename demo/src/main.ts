import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '@geonative/ui/style.css'; // Fixed path
import App from '@/App.vue';
import routes from '@/routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
