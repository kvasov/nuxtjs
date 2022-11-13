<template lang="pug">
  .error error {{error.statusCode}}
</template>

<script>
export default {
  props: ["error"],
  layout: "errorLay",
};
</script>

<style>
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  color: #ac2828;
}
</style>
