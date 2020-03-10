class User {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  getName() {
    return this._name;
  }

  getCode() {
    return this._code;
  }
}

module.exports = User;
