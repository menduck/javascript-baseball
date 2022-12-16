const INPUT_MESSAGE = {
  inputCarUsersName : "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  inputTrialNumber : "\n시도할 횟수를 입력하세요.\n"

}

const CAR_MOVE_MIN_INCLUSIVE = 4;

const RANDOM_RANGE_NUMBER = {
  minRangeInclusive : 0,
  maxRangeInclusive : 9,
}
const OUTPUT_MESSAGE = {
  resultMessage : (user,count) => `${user}: ${('-').repeat(count)}`,

  gameOverMessage : '\n결과\n'
}

const ERROR_MESSAGE = {}



module.exports = {CAR_MOVE_MIN_INCLUSIVE, RANDOM_RANGE_NUMBER, INPUT_MESSAGE,OUTPUT_MESSAGE,ERROR_MESSAGE}
