const Controller = require("./Controller/controller");

class App {
  constructor(){
    this.controller = new Controller
  }
  play() {
    this.controller.gameStart();
  }
}

const app = new App();
app.play()

module.exports = App;
