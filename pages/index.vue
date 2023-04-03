<template>
  <div></div>
</template>

<script>

export default {
  name: "IndexPage",
  created(){
    this.$router.push({name: 'Login'})
  }
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