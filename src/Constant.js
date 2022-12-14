const SUCCESS = 3;

const INPUT_MESSAGE = {
  inputThreeNumberMessage : "숫자를 입력해주세요 : ",
  optionNumberMessage : "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
}

const OUTPUT_MESSAGE = {
  gameStartGuideMessage : "숫자 야구 게임을 시작합니다.",
  gameOverGuideMessage : "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n"

}

const RANDOM_RANGE_NUMBER = {
  minRangeInclusive : 1,
  maxRangeInclusive : 9,
}

const RESULT_MESSAGE = {
  strike : (strike) => `${strike}스트라이크`,
  strikeAndBall : (strike,ball) => `${ball}볼 ${strike}스트라이크`,
  ball : (ball) => `${ball}볼`,
  nothing : `낫싱`
}

module.exports = {INPUT_MESSAGE, OUTPUT_MESSAGE, RANDOM_RANGE_NUMBER, RESULT_MESSAGE, SUCCESS }