import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BaseButton from './components/UI/BaseButton.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseSearch from './components/UI/SearchBar.vue';
import './assets/index.css';

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-search', BaseSearch);

app.use(router);

app.mount('#app');
