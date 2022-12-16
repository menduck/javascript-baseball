const {Console} = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE : {gameTitle} } = require("../util/Constant");

const OutputView = {
  printGameTitle() {
    Console.print(gameTitle)
  }
}

module.exports = OutputView