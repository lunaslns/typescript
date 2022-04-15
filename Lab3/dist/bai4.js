"use strict";
function AddandHandle(x, y, cb) {
    const result = x + y;
    cb(result);
}
AddandHandle(10, 20, (result) => {
    console.log(result);
});
//# sourceMappingURL=bai4.js.map