const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../Constant");

const InputView = {
  readCarUsersName(carUsersName) {
    Console.readLine(INPUT_MESSAGE.inputCarUsersName, (carName) =>{
      carUsersName(carName.split(','));
    } )
  },

  readGameTrial(trialNumber) {
    Console.readLine(INPUT_MESSAGE.inputTrialNumber, (number) => {
      trialNumber(parseInt(number,10))
    })
  }
};

module.exports = InputView;
