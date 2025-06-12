const helper = {

  /* eslint-disable */
  validateEmail (email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (!filter.test(email)) {
      return false
    } else {
      return true
    }
  }
  /* eslint-enable */

}

export default helper