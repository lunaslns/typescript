"use strict";
function render() {
    let body = document.querySelector('body');
    let list = document.createElement('div');
    list.className = "list";
    for (let i = 0; i < 6; i++) {
        let item = document.createElement('div');
        item.className = 'list-item';
        let h3 = document.createElement('h3');
        h3.className = 'list-item-name';
        h3.innerHTML = 'Đồng hồ nam';
        let img = document.createElement('img');
        img.className = 'list-item-img';
        img.src = 'casio-g-shock-GA-110GB-1ADR.jpg';
        let p = document.createElement('p');
        let del = document.createElement('del');
        del.className = 'list-item-oldprice';
        del.innerHTML = '$245';
        let span = document.createElement('span');
        span.className = 'list-item-newprice';
        span.innerHTML = '$199';
        let button = document.createElement('button');
        button.className = 'list-item-button';
        button.innerHTML = 'Đặt hàng';
        list.appendChild(item);
        item.appendChild(h3);
        item.appendChild(img);
        item.appendChild(p);
        item.appendChild(button);
        p.appendChild(del);
        p.appendChild(span);
    }
    body === null || body === void 0 ? void 0 : body.appendChild(list);
}
render();
//# sourceMappingURL=bosung.js.map