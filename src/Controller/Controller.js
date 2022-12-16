const InputView = require("../View/InputView");

class Controller {
  constructor(){

  }
  /*
  saveInput(넘겨받는인풋값){
    try{
      validation.input(넘겨받는인풋값);
      this.저장할인풋 = 넘겨받는인풋값;
      this.그다음단계호출
    } catch {
      // 다시 인풋값 받기
    }
  } */
  askInputCarUsersName() {
    InputView.readCarUsersName(this.saveCarUsersName.bind(this))
  }
  saveCarUsersName(userNameArr) {
    this.userNameArr = userNameArr
    this.askInputGameTrial()
  }

  askInputGameTrial() {
    InputView.readGameTrial(this.saveGameTrial.bind(this));
  }
  saveGameTrial(trialNumber) {
    this.trialNumber = trialNumber
  }


  
}

module.exports = Controller;