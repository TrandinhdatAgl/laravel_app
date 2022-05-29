import request from '@/api/requests';
import axios from "axios";

export default {
    namespaced: true,
    state: {
        authenticated: false,
        user: null,
        token: sessionStorage.getItem("TOKEN"),
    },
    mutations: {
        setAuth(state, user) {
            localStorage.setItem('auth', JSON.stringify(user));
            state.authenticated = true;
            state.user = user;
        },

        logoutAuth(state) {
            state.authenticated = false;
            state.user = null;
            localStorage.removeItem('auth')
            sessionStorage.removeItem('TOKEN')
        },

        setToken(state, token) {
            state.token = token;
            sessionStorage.setItem('TOKEN', token);
        },
        setUser(state, user) {
            state.user = user;
            localStorage.setItem('auth', JSON.stringify(user));
        },
        setAuthenticated(state, authenticated) {
            state.authenticated = authenticated;
        }
    },
    actions: {
        // signup ({commit}, authData) {
        //     axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAv71t6_6YOyOdpbkmsvqtE2i68uhL3U1g', {
        //       name: authData.name,
        //       password: authData.password,
        //       returnSecureToken: true
        //     })
        //       .then(res => {
        //         console.log(res)
        //          localStorage.setItem('token', res.data.token)
        //         commit('authUser', {
        //           token: res.data.token
        //         })

        //         router.push("/dashboard")
        //       })
        //       .catch(error => console.log(error))
        //   },

        register({ commit }, payload) {
            console.log({ 'commit': commit });
            console.log({ 'payload': payload });

            let config = {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH",
                    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
                },
            }
            axios.post('/api/register', payload, config).then((response) => {
                console.log(response);
            })
        },

        login({commit}, user) {
            return request.post('/login', user)
            .then((response) => {
                commit('setToken', response.data.data.token)
                commit('setAuthenticated', true);
                return response.data
            })
        },

        getCurrentUser({commit}) {
            return request.get('/user')
            .then((response) => {
                commit('setUser', response.data);
            })
        },

        logout({commit}) {
            return request.post('/logout')
            .then((response) => {
                commit('setAuthenticated', false);
                commit('setUser', null);
                return response
            })
        },
    }
}
