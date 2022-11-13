<template lang="pug">
  section
    .container
      h1 Users
      ul
        li(
          :key="user"
          v-for="(user, index) in users"
        )
          nuxt-link(
            :to="`/users/${user}`"
          ) User {{ user }}
</template>

<script>
export default {
  data: () => ({
    users: [1, 2, 3, 4, 5],
  }),
};
</script>
