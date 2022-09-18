import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: []
    },
    getters: {
        GET_LIST(state) {
            return state.list
        }
    },
    mutations: {
        LIST(state, data) {
            state.list = data
        }
    },
    actions: {
        LIST(context, model) {
            axios.get('/api/' + model, {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                })
                .then((result) => {
                    context.commit('LIST', result.data.data)
                }).catch((err) => {

                });
        }
    },
})