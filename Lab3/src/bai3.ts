//never & void
let something:void = undefined;
let nothing:never;
function throwError(errorMsg: string):never{
    throw new Error(errorMsg);
}