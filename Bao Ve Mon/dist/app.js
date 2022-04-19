"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Products {
    constructor(id, name, soluongSP, avatar) {
        this.id = id;
        this.name = name;
        this.soluongSP = soluongSP;
        this.avatar = avatar;
    }
    show() {
        let list = document.querySelector('#row');
        list.innerHTML =
            `<div class="col-sm-2">
            <div class="card spkhac">
            <img src="${this.avatar}" alt="" class="img-fluid">
            <div class="card-block">
                <a href="" class="tdspkhac">${this.name}</a><br>
                <b class="pricekhac mt-4">${this.soluongSP}</b><br>
                <a href="" class="btn btn-outline-info btn-block muangay">Mua ngay</a>
            </div>
        </div>`;
    }
}
const baseUrl = 'http://localhost:3000/';
const fetchAPI = (url, option) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(url, option);
    return res.json();
});
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    let url = baseUrl + 'products';
    let options = {
        method: 'GET'
    };
    let res = yield fetchAPI(url, options);
    console.log(res);
    for (let i in res) {
        let pro = new Products(res[i].id, res[i].name, res[i].soluongSP, res[i].avatar);
        console.log(typeof res[i].name);
        console.log(typeof res[i].soluongSP);
        console.log(typeof res[i].avatar);
        console.log(pro);
        pro.show();
    }
});
getProducts();
//# sourceMappingURL=app.js.map