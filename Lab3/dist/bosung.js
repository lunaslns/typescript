"use strict";
class Staff {
    static create(event) {
        return {
            ma: event.ma,
            hoTen: event.hoTen,
            clb: event.clb,
            luong: event.luong,
            thuong: event.thuong,
            phuCap: event.phuCap,
            ghiChu: event.ghiChu,
        };
    }
}
let render = () => {
    var _a, _b, _c, _d;
    // let table = <HTMLInputElement>document.querySelector('#table');
    let arrayStaff = [];
    (_a = document.querySelector('#luu')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
        event.preventDefault();
        let ma = document.querySelector('#ma').value;
        let hoTen = document.querySelector('#hoTen').value;
        let clb = document.querySelector('#clb').value;
        let luong = parseFloat(document.querySelector('#luong').value);
        let thuong = parseFloat(document.querySelector('#thuong').value);
        let phuCap = parseFloat(document.querySelector('#phuCap').value);
        let ghiChu = document.querySelector('#ghiChu').value;
        let newStaff = Staff.create({ ma, hoTen, clb, luong, thuong, phuCap, ghiChu });
        arrayStaff.push(newStaff);
        let form = document.querySelector('#form');
        let wrap_table = document.querySelector('#wrap_table');
        form.style.display = 'none';
        wrap_table.style.display = 'block';
        let tbody = document.querySelector('#tbody');
        let str = '';
        if (arrayStaff.length == 0) {
            str = `<td style="text-align:center" colspan="5"> <i >  Hiện chưa có cầu thủ nào trong danh sách </i> </td>`;
            tbody.innerHTML = str;
        }
        arrayStaff.forEach(element => {
            str += `<tr>
                <td> ${element.ma} </td>
                <td> ${element.hoTen} </td>
                <td> ${element.luong} </td>
                <td> ${element.thuong} </td>
                <td> ${element.phuCap} </td>
            </tr>`;
        });
        tbody.innerHTML = str;
        let cap_nhat = document.querySelector('#cap_nhat');
        cap_nhat.style.border = "none";
        let danh_sach = document.querySelector('#danh_sach');
        danh_sach.style.border = "2px solid #000";
    });
    (_b = document.querySelector("#reset")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector('#ma').value = "";
        document.querySelector('#hoTen').value = "";
        document.querySelector('#clb').value = "";
        document.querySelector('#luong').value = "";
        document.querySelector('#thuong').value = "";
        document.querySelector('#phuCap').value = "";
        document.querySelector('#ghiChu').value = "";
    });
    (_c = document.querySelector('#cap_nhat')) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function (event) {
        event.preventDefault();
        let cap_nhat = document.querySelector('#cap_nhat');
        cap_nhat.style.border = '2px solid #000';
        let danh_sach = document.querySelector('#danh_sach');
        danh_sach.style.border = 'none';
        let table = document.querySelector('#wrap_table');
        let form = document.querySelector('#form');
        table.style.display = 'none';
        form.style.display = 'block';
    });
    (_d = document.querySelector('#danh_sach')) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function (event) {
        event.preventDefault();
        let cap_nhat = document.querySelector('#cap_nhat');
        cap_nhat.style.border = 'none';
        let danh_sach = document.querySelector('#danh_sach');
        danh_sach.style.border = '2px solid #000';
        let form = document.querySelector('#form');
        let wrap_table = document.querySelector('#wrap_table');
        form.style.display = 'none';
        wrap_table.style.display = 'block';
        let tbody = document.querySelector('#tbody');
        let str = '';
        if (arrayStaff.length == 0) {
            str = `<td style="text-align:center" colspan="5"> <i class="text-danger" >  Hiện chưa có nhân viên... </i> </td>`;
            tbody.innerHTML = str;
        }
        arrayStaff.forEach(element => {
            str += `<tr>
                <td> ${element.ma} </td>
                <td> ${element.hoTen} </td>
                <td> ${element.luong} </td>
                <td> ${element.thuong} </td>
                <td> ${element.phuCap} </td>
            </tr>`;
        });
        tbody.innerHTML = str;
    });
};
render();
//# sourceMappingURL=bosung.js.map