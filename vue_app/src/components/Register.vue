<template>
  <div class="row justify-content-center">
    <form @submit.prevent="handleRegister()">
      <div class="form-group">
        <input type="text" class="form-control" v-model="form.name" />
        <span class="text-danger" v-if="errors.name">
          {{ errors.name[0] }}
        </span>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="form.email" />
        <span class="text-danger" v-if="errors.email">
          {{ errors.email[0] }}
        </span>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" v-model="form.password" />
        <span class="text-danger" v-if="errors.password">
          {{ errors.password[0] }}
        </span>
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          v-model="form.confirm_password"
        />
        <span class="text-danger" v-if="errors.confirm_password">
          {{ errors.confirm_password[0] }}
        </span>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterComponent",

  head: {
      script: [
        { type: 'text/javascript', src: 'cdn/to/script.js', async: true, body: true}, // Insert in body
        // with shorthand
        { t: 'application/ld+json', i: '{ "@context": "http://schema.org" }' },
        // ...
      ],
    },

  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirm_password: '',
      },
      errors: {}
    };
  },

  methods: {
    handleRegister() {
      this.$store.dispatch('auth/register', this.form);
    },
  },
};
</script>

<style>
</style>