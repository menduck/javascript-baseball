const { Console } = require("@woowacourse/mission-utils");
const {
  CAR_NAME_RANGE_INCLUSIVE,
  ERROR_MESSAGE: { notAlone, notLessThanFiveStr, notNumber, notdupicate },
} = require("../src/Constant");

const Validation = {
  isValidUserName(userArr) {
    if (userArr.length === 1) {
      throw Console.print(notAlone);
    }

    userArr.map((userName) => {
      if (userName.length > CAR_NAME_RANGE_INCLUSIVE) {
        throw Console.print(notLessThanFiveStr);
      }
      return true;
    });

    const set = new Set(userArr);
    if (userArr.length != set.size) {
      throw Console.print(notdupicate);
    }
    return true;
  },

  isVaildTrial(number) {
    const ONLY_NUMBER_PATTERN = /^[0-9]+$/;
    if (!ONLY_NUMBER_PATTERN.test(number)) {
      throw Console.print(notNumber);
    }
    return true;
  },
};

module.exports = { Validation };
