"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StaticZipCodeValidator_1 = __importDefault(require("./StaticZipCodeValidator"));
let strings = ['hello', '98052', '101'];
strings.forEach((s) => {
    console.log(`"${s}" ${(0, StaticZipCodeValidator_1.default)(s) ? "matches" : "does not match"}`);
});
//# sourceMappingURL=Test.js.map