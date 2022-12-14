const { Random } = require("@woowacourse/mission-utils");
const {
  RANDOM_RANGE_NUMBER: { minRangeInclusive, maxRangeInclusive },
} = require("../Constant");

const BaseballMaker = {
  baseballMaker() {
    let computerNumbers = [];
    while (computerNumbers.length < 3) {
      const randomNumber = Random.pickNumberInRange(
        minRangeInclusive,
        maxRangeInclusive
      );
      if (!computerNumbers.includes(randomNumber))
        computerNumbers.push(randomNumber);
    } return computerNumbers
  }
};
module.exports = BaseballMaker;
  