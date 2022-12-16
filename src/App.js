const Controller = require("./Controller/controller");

class App {
  constructor() {
    this.controller = new Controller();
  }

  play() {
    this.controller.printGameStart();
  }
}
const app = new App()
app.play()
module.exports = App;
