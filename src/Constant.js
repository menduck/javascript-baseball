const CAR_GO_RANGE_INCLUSIVE = 4;
const CAR_NAME_RANGE_INCLUSIVE = 5;

const ERROR_MESSAGE = {
  notLessThanFiveStr : "자동차 이름은 다섯글자 이하여야 합니다.",

  notNumber : "숫자만 입력하세요"
}

const RANDOM_RANGE_NUMBER = {
  minRangeInclusive : 1,
  maxRangeInclusive : 9,
}
const INPUT_MESSAGE = {
  inputCarNameMessage : '자동차 이름을 5자 이하 콤마로 구분하여 입력해주세요.\n',
  inputTrialMessage : '\n시도할 횟수를 입력해주세요.\n'
}

const OUTPUT_MESSAGE = {
  outputGameStartMessage : '자동차 경주 게임을 시작합니다.\n'
}
module.exports = {CAR_NAME_RANGE_INCLUSIVE, ERROR_MESSAGE,CAR_GO_RANGE_INCLUSIVE,RANDOM_RANGE_NUMBER, INPUT_MESSAGE, OUTPUT_MESSAGE};