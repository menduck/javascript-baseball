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
  gameOverMessage : '\n결과\n',
  winnerMessage : (winnerCar) => `최종 우승자: ${winnerCar}`

}

const ERROR_MESSAGE = {
  notFiveStr : '[ERROR]: 자동차 이름은 5글자 이하로 입력하세요.',
  notBlank : '[ERROR]: 자동자 이름을 지정해주세요.',
  notAlone : '[ERROR]: 자동차 한 대 이상 입력하세요.',
  notUnique : '[ERROR]: 중복되지 않은 자동차 이름을 입력하세요.',
  notNumber : '[ERROR]: 숫자를 입력하세요.',

}



module.exports = {CAR_MOVE_MIN_INCLUSIVE, RANDOM_RANGE_NUMBER, INPUT_MESSAGE,OUTPUT_MESSAGE,ERROR_MESSAGE}
