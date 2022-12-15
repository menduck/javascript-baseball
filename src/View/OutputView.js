const {Console} = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE : {outputGameStartMessage} } = require("../Constant");

const OutputView = {
  printGameStart() {
    Console.print(outputGameStartMessage);
  },
  
  printMap(carUsers,goingUser) {
    let result = [];
    const template = carUsers.map((user) => result.push(`${user} :`))
    
  }
}

module.exports = OutputView;