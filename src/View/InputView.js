const {Console} = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE : {inputCarNameMessage, inputTrialMessage} } = require("../Constant");

const inputView = {
  readCarName(carName) {
    Console.readLine(inputCarNameMessage,(car) => {
      carName(car.split(','))
    })
  }

}

module.export = inputView;