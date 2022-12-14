class BaseballGame {
  matchStrike(userNumbers, computerNumbers) {
    return userNumbers.filter((number,idx) => {
      return number === computerNumbers[idx]
    }).length
  }

  matchBall(userNumbers, computerNumbers) {
    return userNumbers.filter((number, idx) => {
      return (computerNumbers.includes(number) && 
      number !== computerNumbers[idx])
    }).length
  }
}
module.exports = BaseballGame;