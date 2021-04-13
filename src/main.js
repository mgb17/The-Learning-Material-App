import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue'
import Button from './components/UI/Button.vue'


const app = createApp(App)

app.component('base-card', BaseCard);
app.component('base-button', Button)

app.mount('#app');
