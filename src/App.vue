<template>
  <header-item />
  <router-view/>
</template>

<script>
import HeaderItem from './components/navigation/HeaderItem.vue'
export default {
  components: { HeaderItem },
  
}
</script>

<style lang="scss">
@import 'assets/scss/style';
</style>
