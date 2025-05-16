import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '@geonative/ui/style.css';
import App from '@/App.vue';
import routes from '@/routes';
import { provideSidebarContext } from '@geonative/ui/components/sidebar/utils.ts';
import { ref, computed } from 'vue';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

// Configuration du contexte Sidebar
const open = ref(true);
const openMobile = ref(false);
const isMobile = ref(false);

function setOpen(value: boolean) {
  open.value = value;
}

function setOpenMobile(value: boolean) {
  openMobile.value = value;
}

function toggleSidebar() {
  isMobile.value ? setOpenMobile(!openMobile.value) : setOpen(!open.value);
}

const state = computed(() => (open.value ? 'expanded' : 'collapsed'));

// Fournir le contexte globalement
provideSidebarContext({
  state,
  open,
  setOpen,
  isMobile,
  openMobile,
  setOpenMobile,
  toggleSidebar,
});

app.use(router).mount('#app');
