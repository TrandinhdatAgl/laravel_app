<template>
  <div class="row justify-content-center">
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
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>

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
            await this.$store.dispatch('auth/login', this.form);
            await this.$store.dispatch('auth/getCurrentUser', []);
             
            this.$router.push('dashboard');
          } catch (error) {
            this.errors = error.response.data.errors;
          }
        },
    },
};
</script>

<style></style>
