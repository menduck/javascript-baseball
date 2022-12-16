const {Console} = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE : {carNamesMessage, trialMessage} } = require("../util/Constant");
const InputView = {
  readCarUsers(carusers) {
    Console.readLine(carNamesMessage,(users) => carusers((users.split(','))))
  } 
}

module.exports = InputView