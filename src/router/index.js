import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import RiddlesView from '@/views/RiddlesView.vue';
import RiddleResultsView from '@/views/RiddleResultsView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/riddles', name: 'Riddles', component: RiddlesView },
  { path: '/riddle-results', name: 'riddle-results', component: RiddleResultsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
