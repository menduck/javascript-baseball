const {
  ERROR_MESSAGE: { notNumber, notThreeNumber, notUniqueNumber, notOneNumber },
  RANDOM_RANGE_NUMBER : {numberSize}
} = require("./Constant");

const Valiidation = {
  isValidThreeNumber(numbers) {
    if (numbers.length !== numberSize) {
      throw new Error(notThreeNumber);
    }
    const uniqueNumbers = new Set(numbers);
    if (numbers.length !== uniqueNumbers.size) {
      throw new Error(notUniqueNumber);
    }
    const onlyNumberPattern = /^[0-9]+$/;
    if (!onlyNumberPattern.test(numbers.join(""))) {
      throw new Error(notNumber);
    }
  },

  isValidOptionNumber(number) {
    if (number.length != 1) {
      throw new Error(notOneNumber);
    }
    const onlyNumberPattern = /^[0-9]+$/;
    if (!onlyNumberPattern.test(number)) {
      throw new Error(notNumber);
    }
  },
};

module.exports = Valiidation;
