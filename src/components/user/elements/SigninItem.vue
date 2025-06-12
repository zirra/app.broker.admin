<template>
  <div class="login-box">
    <h2>Invited Users</h2>
    <br/>
    <p>If you are here you have been supplied with a login instructions to access this site.  If you have any problems please contact email.address.here.</p>
    <br/>
    
    <input type="text"
      v-model="user.email"
      placeholder="EMAIL ADDRESS" /><br/>
    <span v-if="emailError" style="color:#f00;">Valid Email Required</span>
    <input type="password" 
      v-model="user.password"
      placeholder="PASSWORD" /><br/>
    
      <button @click="loginUser">SIGN IN</button>
    
    <br/><br/>
  </div>
</template>

<script>
import storage from '@/com/helpers/storage'

export default {
  name: 'SigninItem',
  data () {
    return {
      user: {
        email: null,
        username: null,
        password: null
      },
      emailError: false
    }
  },
  methods: {
    async loginUser () {
      this.user.username = this.user.email
      const result = await this.signin(this.user)
      console.log(result)
      if (result) {
        console.log('logged')
        storage.saveData('axs', result.data.token)
        storage.saveData('rfs', result.data.rfs)
        storage.saveData('id', result.data.id)
        storage.saveData('shid', result.data.uid)
        storage.saveData('email', result.data.email)
        this.$router.push({ name: 'admin' })
        return true
      } else {
        alert ('There was a problem logging in')
      }
    }
  }
}
</script>

<style>

</style>