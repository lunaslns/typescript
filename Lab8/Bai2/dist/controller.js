"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.users = void 0;
const model_1 = require("./model");
let users = (req, res) => {
    let users = [
        new model_1.User('james coonce', 'jcoonce', 'james@one.com'),
        new model_1.User('lunas doan', 'lunas', 'lunas@one.com'),
        new model_1.User('tuyet ho', 'tuyet', 'tuyet@one.com')
    ];
    res.json(users);
};
exports.users = users;
let create = (req, res) => {
    res.json(req.body);
};
exports.create = create;
//# sourceMappingURL=controller.js.map