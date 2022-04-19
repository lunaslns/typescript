class Products{
    id: any;
    name: string;
    soluongSP: number;
    avatar: string;

    constructor(id: any, name: string, soluongSP: number, avatar: string){
        this.id = id;
        this.name = name;
        this.soluongSP = soluongSP;
        this.avatar = avatar;
    }

    show(){
        let list = document.querySelector('#row') as HTMLElement;
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

const baseUrl:string = 'http://localhost:3000/';

const fetchAPI:Function = async (url:string, option:object) => {
    const res:any = await fetch(url, option)
    return res.json()
};

const getProducts:Function = async () => {
    let url:string = baseUrl + 'products';
    let options = {
      method: 'GET'
    };
    let res:any = await fetchAPI(url, options);
    console.log(res);
    for (let i in res) {
        let pro = new Products(res[i].id, res[i].name, res[i].soluongSP, res[i].avatar);
        console.log(typeof res[i].name);
        console.log(typeof res[i].soluongSP);
        console.log(typeof res[i].avatar);
        console.log(pro);
        pro.show(); 
    }
};

getProducts();