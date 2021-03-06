"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainValidator = exports.ZipCodeValidator = exports.numberRegexp = void 0;
exports.numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    }
}
exports.ZipCodeValidator = ZipCodeValidator;
exports.mainValidator = ZipCodeValidator;
//# sourceMappingURL=ZipCodeValidator.js.map