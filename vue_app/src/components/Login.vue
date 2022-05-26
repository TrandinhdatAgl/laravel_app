<template>
  <div>
    <form @submit.prevent="handleLogin()">
      <div class="form-group">
        <input type="text" class="form-control" v-model="form.email" />
        <span class="text-danger" v-if="errors.email">
            {{ errors.email[0]}}
        </span>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" v-model="form.password" />
        <span class="text-danger" v-if="errors.password">
            {{ errors.password[0] }}
        </span>
      </div>
      <button type="submit" class="btn btn-primary">Se connecter</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'LoginComponent',

    data() {
        return {
        form: {
            email: null,
            password: null,
        },
        errors: {},
        };
    },
    methods: {
        async handleLogin() {
        try {
            await axios.get("/sanctum/csrf-cookie");
            await axios.post("/api/login", this.form).then((response) => {
                let access_token = response.data.data.token;
                axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}` 
            })

            let response = await axios.get("/api/user");
            console.log(response.data);
            this.$store.commit('auth/setAuth', response.data);


            this.$router.push('about');
        } catch (error) {
            this.errors = error.response.data.errors;
        }
        },
    },
};
</script>

<style></style>
