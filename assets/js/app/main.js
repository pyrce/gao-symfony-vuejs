import Vue from 'vue';
import  Vuetify  from 'vuetify'
import Routes from './routes.js';
import home from './views/home.js';
import Layout from './layouts/Layout.vue';

/* import _ from 'lodash'; */

Vue.use(Vuetify);

const app = new Vue({
    name:"Layout",
    el: '#app',
    vuetify: new Vuetify({}),
    router: Routes,
    components: { Layout,home }

})

export default new Vuetify(app);