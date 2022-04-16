interface staff {
    ma: string,
    hoTen: string,
    clb: string,
    luong: number,
    thuong: number,
    phuCap: number,
    ghiChu: string,
}

class Staff {
    static create(event: staff) {
        return { 
            ma: event.ma, 
            hoTen: event.hoTen, 
            clb: event.clb, 
            luong: event.luong, 
            thuong: event.thuong, 
            phuCap: event.phuCap, 
            ghiChu: event.ghiChu,
        }
    }
}

let render = () => {
    // let table = <HTMLInputElement>document.querySelector('#table');
    let arrayStaff: any[] = [];

    document.querySelector('#luu')?.addEventListener('click', function(event) {
        event.preventDefault();
        let ma = (<HTMLInputElement>document.querySelector('#ma')).value;
        let hoTen = (<HTMLInputElement>document.querySelector('#hoTen')).value;
        let clb = (<HTMLInputElement>document.querySelector('#clb')).value;
        let luong = parseFloat((<HTMLInputElement>document.querySelector('#luong')).value);
        let thuong = parseFloat((<HTMLInputElement>document.querySelector('#thuong')).value);
        let phuCap = parseFloat((<HTMLInputElement>document.querySelector('#phuCap')).value);
        let ghiChu = (<HTMLInputElement>document.querySelector('#ghiChu')).value;

        let newStaff = Staff.create({ma, hoTen, clb, luong, thuong, phuCap, ghiChu});
        arrayStaff.push(newStaff);
        

        let form = document.querySelector('#form') as HTMLElement;
        let wrap_table = document.querySelector('#wrap_table') as HTMLElement;

        form.style.display = 'none';
        wrap_table.style.display = 'block';

        let tbody = document.querySelector('#tbody') as HTMLElement;
        let str:string = '';
        if(arrayStaff.length == 0) {
            str = `<td style="text-align:center" colspan="5"><i>Hiện chưa có nhân viên...</i></td>`;
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

        let cap_nhat = document.querySelector('#cap_nhat') as HTMLElement;
        cap_nhat.style.border = "none";
        let danh_sach = document.querySelector('#danh_sach') as HTMLElement;
        danh_sach.style.border = "2px solid #000";
    })
    document.querySelector("#reset")?.addEventListener("click", function(event) {
        event.preventDefault();
        (<HTMLInputElement>document.querySelector('#ma')).value = "";
        (<HTMLInputElement>document.querySelector('#hoTen')).value = "";
        (<HTMLInputElement>document.querySelector('#clb')).value = "";
        (<HTMLInputElement>document.querySelector('#luong')).value = "";
        (<HTMLInputElement>document.querySelector('#thuong')).value = "";
        (<HTMLInputElement>document.querySelector('#phuCap')).value = "";
        (<HTMLInputElement>document.querySelector('#ghiChu')).value = "";
    })

    document.querySelector('#cap_nhat')?.addEventListener("click", function(event) {
        event.preventDefault();

        let cap_nhat = document.querySelector('#cap_nhat') as HTMLElement;
        cap_nhat.style.border = '2px solid #000';
        let danh_sach = document.querySelector('#danh_sach') as HTMLElement;
        danh_sach.style.border = 'none';

        let table = document.querySelector('#wrap_table') as HTMLElement;
        let form = document.querySelector('#form') as HTMLElement;

        table.style.display = 'none';
        form.style.display = 'block';
    })

    document.querySelector('#danh_sach')?.addEventListener("click", function(event) {
        event.preventDefault();

        let cap_nhat = document.querySelector('#cap_nhat') as HTMLElement;
        cap_nhat.style.border = 'none';
        let danh_sach = document.querySelector('#danh_sach') as HTMLElement;
        danh_sach.style.border = '2px solid #000';

        let form = document.querySelector('#form') as HTMLElement;
        let wrap_table = document.querySelector('#wrap_table') as HTMLElement;

        form.style.display = 'none';
        wrap_table.style.display = 'block';

        let tbody = document.querySelector('#tbody') as HTMLElement;
        let str:string = '';
        if(arrayStaff.length == 0) {
            str = `<td style="text-align:center" colspan="5"><i class="text-danger">Hiện chưa có nhân viên...</i></td>`;
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
    })
}
render()