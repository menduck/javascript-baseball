const { Random } = require("@woowacourse/mission-utils");
const {
  RANDOM_RANGE: { minRangeInclusive, maxRangeInclusive },
} = require("./Constant");

const RandomGenerator = {
  generate() {
    return Random.pickNumberInRange(minRangeInclusive, maxRangeInclusive);
  },
};

module.exports = RandomGenerator;
