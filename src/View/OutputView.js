const {Console} = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE : {gameGuideMessage}} = require("../Constant");

const OutputView = {
  printGameStartMessage() {
    Console.print(gameGuideMessage)
  }
}

module.exports = OutputView
