const {Console} = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE : {inputCarNameMessage, inputTrialMessage} } = require("../Constant");

const inputView = {
  readCarName(carName) {
    Console.readLine(inputCarNameMessage,(car) => {
      carName(car.split(','))
    })
  },

  readTrial(trail) {
    Console.readLine(inputTrialMessage, (number) => {
      trail(parseInt(number,10))
    })
  }

}

module.export = inputView;