"use strict";
///// <reference path="studentCalc.ts"/>
var studentCalc;
(function (studentCalc) {
    function AnualFeeCalc(feeAmount, term) {
        return feeAmount * term;
    }
    studentCalc.AnualFeeCalc = AnualFeeCalc;
})(studentCalc || (studentCalc = {}));
let TotalFee = studentCalc.AnualFeeCalc(1500, 4);
console.log('output: ' + TotalFee);
//# sourceMappingURL=index.js.map