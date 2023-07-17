import {createApp} from 'vue';
import App from './App.vue';

import * as bootstrap from 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';

import {router} from './router';

createApp(App).use(router).mount('#app');
