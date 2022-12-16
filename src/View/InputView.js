const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../Constant");

const InputView = {
  readCarUsersName(carUsersName) {
    Console.readLine(INPUT_MESSAGE.inputCarUsersName, (CarName) =>{
      carUsersName(CarName.split(','));
    } )
  }
  

};

module.exports = InputView;
