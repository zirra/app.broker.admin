<template>
  <div class="login-box">
    <h2>Sign up</h2>
    <br/>
    
    <input type="text" 
      v-model="register.email"
      placeholder="EMAIL ADDRESS" />
    <span v-if="emailError" style="color:#f00;">Valid Email Required</span>
  
    <input type="password" 
      v-model="register.password"
      placeholder="PASSWORD"/>
    
    <input type="password" 
      v-model="register.verify"
      placeholder="VERIFY PASS"/>

    
    <button @click="createUser">REGISTER</button>
    
    
  </div>
</template>

<script>
import storage from '@/com/helpers/storage'
import helper from '@/com/helpers/helper'
import userServices from '@/com/services/user.services'
export default {
  name: 'SignupItem',
  data () {
    return {
      user: {
        email: null,
        username: null,
        password: null
      },
      register: {
        email: null,
        username: null,
        verify: null,
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
    },

    async createUser () {
      this.register.username = this.register.email
      this.emailError = !helper.validateEmail(this.register.email)

      if(this.register.verify === this.register.password && !this.emailError) {
        let res = await userServices.registerUser(this.register)
        if(res.status === 200) {
          this.$emit('confirmed', this.register.email)
        }
      } else {
        if(this.emailError) {
          alert('Invalid email')
        } else {
          alert('Passwords must match')
        }
      }
    }

  }

}
</script>

<style>

</style>