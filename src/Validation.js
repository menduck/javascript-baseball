
const {CAR_NAME_RANGE_INCLUSIVE, ERROR_MESSAGE : {notLessThanFiveStr, notNumber}} = require('../src/Constant');

const Validation = {
  isValidUserName(userArr) {
    const checkFivestr = userArr.map((userName) => {
      if(userName.length > CAR_NAME_RANGE_INCLUSIVE) return false
    })
    if(checkFivestr.includes(false)) {
      throw new Error(notLessThanFiveStr)
    }
  },

  isVaildTrial(number) {
    const ONLY_NUMBER_PATTERN = /^[0-9]+$/;
    if(!ONLY_NUMBER_PATTERN.test(number)) {
      throw new Error(notNumber)
    }

  }
}

module.exports = {Validation};