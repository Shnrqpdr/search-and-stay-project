<template>
  <Login />
</template>

<script>
import Login from '../components/Login.vue';

export default {
    name: "IndexPage",
    components: { Login }
}
</script>
<style lang="scss">
#__layout {
  background: aliceblue;
}

.container {
  width: 100vw;
  height: 100vh;
}
</style>