import axios from  'axios'

const api = {

  async post ( path, data ) {
    try {
      return await axios.post(
        this.adminApi(path), data)
        .then( response => response )
    } catch (e) {
      return e
    }
  },

  async get (path) {
    try {
      return await axios.get( 
          this.adminApi(path)
        )
        .then( response => response )
    } catch (e) {
      return e
    }
  },

  async postAdmin ( path, data, adminHeaders ) {
    try {
      return await axios.post( 
        this.adminApi(path), 
        data, 
        this.adminOptions(adminHeaders)
        )
        .then( response => response )
    } catch (e) {
      return e
    }
  },

  async patchAdmin ( path, data, adminHeaders ) {
    console.log(data)
    try {
      return await axios.patch( 
        this.adminApi(path), 
        {item: data}, 
        this.adminOptions(adminHeaders)
        )
        .then( response => response )
    } catch (e) {
      return e
    }
  },

  async getAdmin (path, adminHeaders) {
    try {
      return await axios.get( 
        this.adminApi(path), 
        this.adminOptions(adminHeaders)
        )
        .then( response => response )
    } catch (e) {
      return e
    }
  },

  adminApi ( path ) {
    let baseurl =  process.env.VUE_APP_API
    if ( !baseurl.endsWith('/') ) {
      baseurl += '/'
    }
    //baseurl += 'admin/'
    let p = path
    if ( p.startsWith('/') ) {
      p = path.slice(1)
    }
    return `${baseurl}${p}`
  },

  adminOptions ( additionalHeaders ) {
    const token = localStorage.getItem('axs')
    const defaultHeaders = {  
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    return {
      headers: Object.assign(
        {},
        defaultHeaders.headers,
        ( additionalHeaders ? additionalHeaders.headers: {} 
      ))
    }
  }
  
}

export default api