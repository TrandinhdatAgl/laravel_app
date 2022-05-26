// import axios from 'axios'
// import router from '../router'

export default {
    namespaced: true,
    state:{
        authenticated:false,
        user: null
    },
    mutations: {
        setAuth(state, user) {
            localStorage.setItem('auth', JSON.stringify(user));
            state.authenticated = true;
            state.user = user;
        },
        initializedAuth() {
            if (localStorage.getItem('auth')) {
                this.state.authenticated = true;
                this.state.user = JSON.parse(localStorage.getItem('auth'));
            }
        }
    },
}
