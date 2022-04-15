//never & void
let something:void = undefined;
// let nothing:never = null;
function throwError(errorMsg: string):never{
    throw new Error(errorMsg);
}