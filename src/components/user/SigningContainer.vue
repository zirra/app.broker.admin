<template>
  <div class="signing-window">
    <confirm-item />
    <signin-item />
    <signup-item />
  </div>
</template>

<script>
import ConfirmItem from './elements/ConfirmItem.vue'
import SigninItem from './elements/SigninItem.vue'
import SignupItem from './elements/SignupItem.vue'

export default {
  name: 'SigningContainer',
  components: {
    ConfirmItem,
    SigninItem,
    SignupItem
  },
  data () {
    return {
      signingMode: 'signup'
    }
  }
}
</script>

<style>

</style>