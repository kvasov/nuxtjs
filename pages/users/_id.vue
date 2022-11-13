<template lang="pug">
  h1 {{user.name}}
</template>

<script>
export default {
  validate({ params }) {
    console.log(params);
    return /^\d+$/.test(params.id);
  },
  async asyncData({ store, params, error }) {
    try {
      const user = await store.dispatch("users/fetchUserById", params.id);
      return { user };
    } catch (e) {
      error(e);
    }
  },
};
</script>
