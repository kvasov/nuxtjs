<template lang="pug">
  section
    .container
      h1 {{pageTitle}}
      ul
        li(
          :key="user.id"
          v-for="(user, index) in users"
        )
          nuxt-link(
            :to="`/users/${user.id}`"
          ) User {{ user.name }}
</template>

<script>
export default {
  // async asyncData({ store, error }) {
  //   try {
  //     await store.dispatch("users/fetchUsers");
  //     return {};
  //   } catch (e) {
  //     error(e);
  //   }

  //   // return $axios
  //   //   .$get("https://jsonplaceholder.typicode.com/users")
  //   //   .then((users) => {
  //   //     return {
  //   //       users,
  //   //     };
  //   //   })
  //   //   .catch((err) => error(err));

  //   // return new Promise((resolve) => {
  //   //   setTimeout(() => {
  //   //     resolve({
  //   //       users: [1, 2, 3, 4, 5],
  //   //     });
  //   //   }, 1000);
  //   // });
  // },

  // async fetch({ store, error }) {
  //   try {
  //     if (!store.getters["users/users"].length) {
  //       await store.dispatch("users/fetchUsers");
  //     }
  //   } catch (e) {
  //     error(e);
  //   }
  // },
  computed: {
    users() {
      return this.$store.getters["users/users"];
    },
  },
  data() {
    return {
      pageTitle: "Users Page",
    };
  },
};
</script>
