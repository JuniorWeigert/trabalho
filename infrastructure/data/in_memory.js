
class InMemory {
    static initialize() {
        this._users = [];
        this._messages = [];
    }

    static get users() {
        return this._users;
    }

    static get messages() {
        return this._messages;
    }

    
}
module.exports = InMemory;
