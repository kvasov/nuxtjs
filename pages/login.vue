<template lang="pug">
  form
    h1 login
    .form-group
      input.form-control(
        type="text"
      )
    .form-group
      input.form-control(
        type="password"
      )

    button.btn.btn-primary Login
</template>

<style>
form {
  width: 600px;
}

.form-group {
  margin-bottom: 10px;
}
</style>
