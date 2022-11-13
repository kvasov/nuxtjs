<template lang="pug">
  form(
    @submit.prevent="onSubmit"
  )
    h1 login
    .form-group
      input.form-control(
        type="text"
      )
    .form-group
      input.form-control(
        type="password"
      )

    button.btn.btn-primary(
      type="submit"
    ) Login
</template>

<script>
export default {
  methods: {
    onSubmit() {
      this.$store.dispatch("login");
      this.$router.push("/");
    },
  },
};
</script>

<style>
form {
  width: 600px;
}

.form-group {
  margin-bottom: 10px;
}
</style>
