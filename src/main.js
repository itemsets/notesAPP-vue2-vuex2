import Vue from 'vue'

import store from './store'
import NoteApp from './components/App.vue'

// Vue.config.debug = true;
Vue.config.devtools = true;

const app = new Vue({
    store, 
    render: h => h(NoteApp)
}).$mount('#app')