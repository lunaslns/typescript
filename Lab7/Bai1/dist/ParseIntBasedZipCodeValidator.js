"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegExpBasedZipCodeValidator = exports.ParseIntBasedZipCodeValidator = void 0;
class ParseIntBasedZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}
exports.ParseIntBasedZipCodeValidator = ParseIntBasedZipCodeValidator;
var ZipCodeValidator_1 = require("./ZipCodeValidator");
Object.defineProperty(exports, "RegExpBasedZipCodeValidator", { enumerable: true, get: function () { return ZipCodeValidator_1.ZipCodeValidator; } });
//# sourceMappingURL=ParseIntBasedZipCodeValidator.js.map