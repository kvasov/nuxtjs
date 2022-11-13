<template lang="">
  <nav class="navbar navbar-expand-sm bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Nuxt</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link active-class="active" exact class="nav-link" to="/"
              >Home</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link
              no-prefetch
              active-class="active"
              class="nav-link"
              to="/users"
              >Users</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/about"
              >About</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link
              active-class="active"
              class="nav-link"
              to="/login"
              v-if="!isAuth"
              >Login</nuxt-link
            >
          </li>
          <li class="nav-item" v-if="isAuth">
            <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
