<template>
  <div class="login-box">
    <h2>Confirm View</h2>
    <p>{{ user }}</p>
    <input type="text" placeholder="USER NAME" v-model="user"/><br/>
    <input type="text" placeholder="CONFIRM CODE" v-model="confirmCode"/>
    <br/><br/>
    <button @click="confirm">Confirm</button>
    <br/><br/>
    <button @click="resend">Didn't get a code?</button>
  </div>
</template>

<script>
import userServices from '@/com/services/user.services'
export default {
  name: 'ConfirmView',
  data () {
    return {
      user: null,
      confirmCode: null
    }
  },
  mounted () {
    try {
      this.user = this.$route.query.user
    } catch {
      this.user = null
    }
  },
  methods: {
    async confirm () {
      console.log({  
          username: this.user,
          confirmationCode: this.confirmCode
        })
      let res = await userServices.confirmUser(
        {  
          username: this.user,
          confirmationCode: this.confirmCode
        }
      )
      if (res.status === 200) {
        this.$emit('completed')
      } else {
        alert('problem')
      }
    },
    async resend () {
      let res = await userServices.resendConfirm({username: this.user})
      if (res.status === 200) {
        alert('resent confirmation')
      } else {
        alert('problem')
      }
    }
  }
}
</script>

<style>

</style>