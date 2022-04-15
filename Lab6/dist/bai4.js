"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//method decorator
function Log3(target, name, descriptor) {
    console.log('method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
var Products = /** @class */ (function () {
    function Products(t, p) {
        this.title = t;
        this._price = p;
    }
    Products.prototype.getPriceWithTax = function () { };
    __decorate([
        Log3
    ], Products.prototype, "getPriceWithTax", null);
    return Products;
}());
//# sourceMappingURL=bai4.js.map