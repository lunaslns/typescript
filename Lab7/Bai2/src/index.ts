///// <reference path="studentCalc.ts"/>

namespace studentCalc{
    export function AnualFeeCalc(feeAmount: number, term: number){
        return feeAmount * term;
    }
}

let TotalFee = studentCalc.AnualFeeCalc(1500, 4);
console.log('output: ' +TotalFee);