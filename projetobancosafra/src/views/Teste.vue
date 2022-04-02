<template>
  <div>
    <Teste/>
    <!-- <Menu/> -->
  </div>
</template>


<script>
import Teste from '@/components/Teste.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: "Teste",
  components: {
    Teste,
    Menu,
  },
  created() {
    this.$store.dispatch("user/saveUser");
  },
};
</script>

<style>
body{
    background-color: lightgray;
}
</style>

