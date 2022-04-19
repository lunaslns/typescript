const url = 'http://localhost:3000/'

const fetchApi = async (url, option) =>{
    const res = await fetch(url, option)
    return res.json()
}

const getProductById = async (id) => {
    const productsUrl = url + 'products/' + id
    const option = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json'
        },
    }
    return await fetchApi(productsUrl, option)
}

const getProducts = async () => {
    const productsUrl = url + 'products'
    const option = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json'
        },
    }
    const res = await fetchApi(productsUrl, option)
    showProducts(res)
}

const showProducts = data => {
    let tableBody = document.getElementById('row')
    if (!tableBody) {
        return;
    }
    tableBody.innerHTML = ''
    for (let index = 0; index < data.length; index++) {
        const product = data[index];
        tableBody.innerHTML += `
        <div class="col-sm-2">
            <div class="card spkhac">
                <img src="${product.avatar}" alt="" class="img-fluid">
                <div class="card-block">
                    <a href="" class="tdspkhac">${product.name}</a><br>
                    <b class="pricekhac mt-4">${product.soluongSP}</b><br>
                    <a href="" onclick="addToCart('${product.id}')" class="btn btn-outline-info btn-block muangay">Mua ngay</a>
                </div>
            </div>
        </div>
        `
    }
}

const addProduct = async () => {
    const data = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value
    }
    const productsUrl = url + 'products'
    const option = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const res = await fetchApi(productsUrl, option)
    showAddedProduct(res)
    clearForm()
}

const showAddedProduct = product => {
    let tableBody = document.getElementById('table-body')
    tableBody.innerHTML += `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
                <button onclick="getEdit('${product.id}')">Edit</button>
                <button onclick="removeProduct('${product.id}')">Remove</button>
                <button onclick="addToCart('${product.id}')">Add to Cart</button>
            </td>
        </tr>
    `
}


const editProduct = async (id) => {
    const data = {
        name: document.getElementById('name').value,
        soluongSP: document.getElementById('price').value
    }
    const productsUrl = url + 'products/' + id
    const option = {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const res = await fetchApi(productsUrl, option)
    getProducts()
}

const removeProduct = async (id) => {
    const productsUrl = url + 'products/' + id
    const option = {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json'
        },
    }
    const res = await fetchApi(productsUrl, option)
    getProducts()
}

const submitForm = async () => {
    let id = document.getElementById('id').value
    if (id == 0) {
        await addProduct()
    } else {
        await editProduct(id)
    }
}

const getEdit = async (id) => {
    const product = await getProductById(id)
    document.getElementById('name').value = product.name
    document.getElementById('price').value = product.soluongSP
    document.getElementById('id').value = product.id
}

const clearForm = () => {
    document.getElementById('name').value = ''
    document.getElementById('price').value = ''
    document.getElementById('id').value = 0
}

getProducts()

// cart = [
//     {product: {id: 1, name: 'san pham 1', price: 123}, quantity: 1}
// ]

let cart = []
const addToCart = async (id) => {
    let storage = localStorage.getItem('cart')
    if (storage) {
        cart = JSON.parse(storage)
    }

    let product = await getProductById(id)

    let item = cart.find(c => c.product.id == id)
    if (item) {
        item.quantity += 1
    } else {
        cart.push({product, quantity: 1})
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    showCart(cart)
}

const showAllProductsInCart = () => {
    let storage = localStorage.getItem('cart')
    if (storage) {
        cart = JSON.parse(storage)
    }
    showCart(cart)
}

const showCart = (shoppingCart) => {
    let cartBody = document.getElementById('information-product')
    if (!cartBody || !shoppingCart || shoppingCart.length < 1) {
        return;
    }
    cartBody.innerHTML = ''
    shoppingCart.forEach(item => {
        cartBody.innerHTML += `
        <div class="information-product">
            <div class="image-product">
            <img src="${item.product.avatar}" alt="" />
            </div>
            <div class="detail-product">
                <div class="detail-product-top">
                <div class="detail-product-left">
                    <a class="item" href="#">
                    <span class="img"
                        ><img src="./images/logo.png" alt="" /></span
                    >${item.product.name}</a
                    >
                    <div class="word2">
                    <p class="ship-quickly">Hàng Giao 2H</p>
                    </div>
                    <div class="word2">
                    <span class="del"><button onclick="onclick="removeItem(${item.product.id})">Remove</button></span
                    ><span class="for-after">Để dành mùa sau</span>
                    </div>
                </div>
                <div class="detail-product-right">
                    <div class="price-item">
                    <h4>${item.product.soluongSP}</h4>
                    <h6><del>3.690.000</del> -23%</h6>
                    </div>
                    <div class="number">
                    <div class="CartQty__StyledCartQty-o1bx97-0 iaIXXn">
                        <span class="qty-decrease qty-disable">-</span
                        ><input type="tel" class="qty-input" value="${item.quantity}" /><span
                        class="qty-increase"
                        >+</span
                        >
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        `
    })    
}


const removeItem = id => {
    let storage = localStorage.getItem('cart')
    if (storage) {
        cart = JSON.parse(storage)
    }
    cart = cart.filter(item => item.product.id != id)
    localStorage.setItem('cart', JSON.stringify(cart))
    showCart(cart)
}

const checkout = async () => {
    const data = {
        address: document.getElementById('address').value,
        mobile: document.getElementById('mobile').value
    }
    const productsUrl = url + 'orders'
    const option = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const res = await fetchApi(productsUrl, option)
    postOrderDetail(res.id)
}

const postOrderDetail = async (idOrder) => {
    let storage = localStorage.getItem('cart')
    if (storage) {
        cart = JSON.parse(storage)
        console.log(cart)
    }

    let orderDetails = []
    for (let index = 0; index < cart.length; index++) {
        const item = cart[index];
        let orderDetail = {
            order_id: idOrder,
            product_id: item.product.id,
            quantity: item.quantity,
            unit_soluongSP: item.product.soluongSP 
        }
        orderDetails.push(orderDetail)
    }
    let promises = orderDetails.map(item => {
        return postOrderDetailAsync(item)
    })
    await Promise.all(promises)
    localStorage.removeItem('cart')
    cart = []
    showCart()
}

const postOrderDetailAsync = async (data) => {
    const productsUrl = url + 'order_details'
    const option = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    await fetchApi(productsUrl, option)
}

showAllProductsInCart();