const { Console } = require("@woowacourse/mission-utils");
const { ERROR_MESSAGE } = require("./Constant");

const Validation = {
  isVaildCarName(carNameArr) {
    carNameArr.map((carName) => {
      if (carName.length > 5) {
        throw Console.print(ERROR_MESSAGE.notFiveStr);
      }

      if (carName.length === 0) {
        throw Console.print(ERROR_MESSAGE.notBlank);
      }
    });

    if (carNameArr.length === 1) {
      throw Console.print(ERROR_MESSAGE.notAlone);
    }

    const set = new Set(carNameArr);
    if (set.size !== carNameArr.length) {
      throw Console.print(ERROR_MESSAGE.notUnique);
    }
  },

  isValidTrialNumber(trialNumber) {
    const ONLY_NUMBER_PATTERN = /^[0-9]+$/; // 숫자만
    if (!ONLY_NUMBER_PATTERN.test(trialNumber)) {
      throw Console.print(ERROR_MESSAGE.notNumber);
    }
  },
};

module.exports = Validation;
