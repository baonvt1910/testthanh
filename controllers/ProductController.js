var express = require('express');
var router = express.Router();

/// DATA
const mongoose = require("mongoose");
const Product = require("../models/Products");

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getProduct);

async function getProduct(req, res) {
    var productlist = await Product.find({});
    console.log(productlist);
    res.render("product", { title: "Product Page", product: productlist });
}

////SEARCHING
/*router.post("/", getSearch);

async function getSearch(req, res) {
    console.log(req.params);
    res.end(JSON.stringify(req.body));
    var searchBar = req.body.searchBar;
    //const productsList = document.getElementById('productsList');
    var productlist = await Product.find({});
    let hpproducts = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredproducts = hpproducts.filter((product) => {
        return (
            product.ProductName.toLowerCase().includes(searchString)
        );
    });
    displayproducts(filteredproducts);
});

const loadproducts = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/products');
        hpproducts = await res.json();
        displayproducts(hpproducts);
    } catch (err) {
        console.error(err);
    }
};

const displayproducts = (products) => {
    const htmlString = products
        .map((product) => {
            return `
            {{#each product}}
            {{!add id="productList, "}}
            <li id="productsList" style="display:inline-block">
                <div class="card">
                    <H2 id="productName">{{ProductName}}</H2>
                    <img class="productimg" style="height: 200px" src="/{{ImgLink}}">
                    <H3 class="price">Giá: {{Price}}</H3>
                    <BR> Thông tin sản phẩm
                    <p>
                        {{Information}}
                    </p>
                    <BR> Unit: {{Unit}}
                    <p><button>Add to Cart</button></p>
                </div>
            </li>
            {{/each}}
        `;
        })
        .join('');
    productsList.innerHTML = htmlString;
};

loadproducts();
}*/




/// - NEW --> Create
router.get("/new", getNewProduct);

function getNewProduct(req, res) {
    res.render("products/product-new", { title: "Create a New Product" });
}
/// - CRUD - C - Create / Post - Add
router.post("/", createNewProduct);

function createNewProduct(req, res) {
    console.log(req.params);
    //console.log(req.body.Price);
    res.end(JSON.stringify(req.body));
    //res.render("product-new", { title: "Create a New Product" });
    let newProducts = new Product({
        ProductName: req.body.ProductName,
        ProductCode: req.body.ProductCode,
        Information: req.body.Information,
        Price: req.body.Price,
        Unit: req.body.Unit,
        ImgLink: req.body.ImgLink 
    });
    newProducts.save();
}


/// - reEDIT --> Update
router.get("/edit", getEditProduct);

function getEditProduct(req, res) {
    res.render("product-edit", { title: "Create a New Product" });
}

/// - CRUD - U - Update / Put 
router.put("/:id", updateProduct);

function updateProduct(req, res) {
    res.render("product-update", { title: "Update a Product" });
}


/// - CRUD - D - Delete 
router.delete("/:id", deleteProduct);

function deleteProduct(req, res) {
    res.render("product-delete", { title: "Update a Product" });
}





/// --- EXports
module.exports = router;