
  const INPUT_MESSAGE = {
    carNamesMessage : "자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.\n",
    trialMessage : "시도할 횟수를 입력해주세요.\n"
  }

  const OUTPUT_MESSAGE = {
    gameTitle : "자동차 경주 게임\n",
  }

  const RANDOM_RANGE = {
    minRangeInclusive : 0,
    maxRangeInclusive : 9,
  }

  const GO_MIN_INCLUSIVE = 4;

  const RESULT_MESSAGE = {
    currentPostion : (car,goCount) => `${car}: ${'-'.repeat(goCount)}`
  }

module.exports = {RESULT_MESSAGE, INPUT_MESSAGE, OUTPUT_MESSAGE, RANDOM_RANGE, GO_MIN_INCLUSIVE};