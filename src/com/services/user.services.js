import api from '@/com/helpers/api'

class UserServices {
  
  async registerUser (uObj) {
    try {
      let res = await api.postAdmin('/sec/signup', uObj)
      return res
    } catch {
      return false
    }
  }
  
  async confirmUser (uObj) {
    try {
      let res =  await api.postAdmin('/sec/confirm', uObj)
      return res
    } catch {
      return false
    }
  }

  async resendConfirm (uObj) {
    try {
      let res =  await api.postAdmin('/sec/resend', uObj)
      return res
    } catch {
      return false
    }
  }

  async signinUser (uObj) {
    try {
      let res =  await api.post('/sec/signin', uObj)
      if (res.status === 200) {
        return res
      } else {
        console.log('what')
        return false
      }
    } catch {
      console.log('failure')
    }
  }

  async getUserProfile (short) {
    try {
      const res =  await api.getAdmin(`/v1/profile/${short}/profile`)
      if (res.status === 200) {
        return res.data
      } else {
        return false
      }
    } catch {
      console.log('failure')
    }
  }

  async verifyUser () {
    let res = await api.getAdmin('/verify')
    if (res.code === 'ERR_BAD_REQUEST') {
      return false
    } else {
      return true
    }
  }

  async saveProfile (rltrid, profile) {
    try {
      const res = await api.postAdmin(`/v1/profile/${rltrid}/profile`, profile)
      return res
    } catch (err) {
      console.log(err)
      return false
    }
  }

}

export default new UserServices()