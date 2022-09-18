import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios.js'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
Vue.config.productionTip = false

new Vue({
    router,
    axios,
    store,
    render: h => h(App)
}).$mount('#app')