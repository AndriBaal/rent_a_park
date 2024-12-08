import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/custom.scss';

import { createApp } from 'vue'
import router from './router.js'
import App from './app.vue'

createApp(App)
  .use(router)
  .mount('#app')
