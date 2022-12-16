const {Console} = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("../Constant");


const OutputView = {
  printGameOverGuide(){
    Console.print(OUTPUT_MESSAGE.gameOverMessage)
  },

  PrintResult([user,count]) {
    Console.print(OUTPUT_MESSAGE.resultMessage(user,count));
  }
  
};

module.exports = OutputView;
