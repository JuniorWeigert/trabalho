const Saved = require("../db/index");
Saved.initializeRepo();

class Validate {
  static validateUser(name, code) {
    console.log(`validate User ${name.length} - ${code.toString().length}`);
    let isValid = false;
    try {
      console.log(`users salvos no validate ${Saved.getLength()}`);
    } catch (err) {
      console.log("erro no length do array salvo");
    }

    if (!(name.length < 3 || code.toString().length < 4)) {
      if (Saved.getLength() < 1) {
        isValid = true;
      } else {
        isValid = Saved.getUsers().some(el => el.getCode() !== code.toString());
      }
    }

    return isValid;
  }
}

module.exports = Validate;
