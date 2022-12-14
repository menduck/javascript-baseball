const {Console} = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE : {gameStartGuideMessage, gameOverGuideMessage}, RESULT_MESSAGE : {strike, strikeAndBall, ball , nothing}} = require("../Constant");

const OutputView = {
  printGameStartMessage() {
    Console.print(gameStartGuideMessage)
  },

  printMap(strikeCount,ballCount) {
    if(strikeCount === 0 && ballCount === 0) Console.print(nothing)
    if(strikeCount === 3 && ballCount === 0 ) Console.print(gameOverGuideMessage)
    if(strikeCount === 3 && ballCount > 0) Console.print(ball(ballCount))
    if(strikeCount < 3 && ballCount === 0) Console.print(strike(strikeCount))
    if(strikeCount > 0 && ballCount > 0) Console.print(strikeAndBall(strikeCount,ballCount))
    
  }
}

module.exports = OutputView
