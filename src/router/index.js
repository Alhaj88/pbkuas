import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import Location from '../components/Location.vue';
import Weather from '../components/Weather.vue';
import Stopwatch from '../components/Stopwatch.vue';
import TicTacToe from '../components/TicTacToe.vue';

const routes = [
  {
    path: '/location',
    name: 'Location',
    component: Location
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather
  },
  {
    path: '/stopwatch',
    name: 'Stopwatch',
    component: Stopwatch
  },
  {
    path: '/tic-tac-toe',
    name: 'TicTacToe',
    component: TicTacToe
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;