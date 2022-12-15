const {Console} = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE : {inputThreeNumberMessage, optionNumberMessage}} = require("../Constant");

const InputView = {
  readUserNumbers(userThreeNumbers) {
    Console.readLine(inputThreeNumberMessage,(numbers) => {
      userThreeNumbers(numbers.split('').map((v) => parseInt(v,10)))
    })
  },

  readOptionNumber(optionNumber) {
    Console.readLine(optionNumberMessage, (number) => {
      optionNumber(parseInt(number,10))
    })
  }
}

module.exports = InputView