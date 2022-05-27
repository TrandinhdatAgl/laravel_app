import axios from "axios";

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
        },

        logoutAuth(state) {
            state.authenticated = false;
            state.user = null;
            localStorage.removeItem('auth')
            localStorage.removeItem('access_token')
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

        register({commit}, payload) {
            console.log({'commit': commit});
            console.log({'payload': payload});

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
        }
    }


}
