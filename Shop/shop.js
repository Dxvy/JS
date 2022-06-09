var cart = {
    products: [],
    total: 0,
    addProduct: function(product){
        this.products.push(product);
        this.calculateTotal();
    },
    removeProduct: function(product){
        var index = this.products.indexOf(product);
        this.products.splice(index, 1);
        this.calculateTotal();
    },
    calculateTotal: function(){
        var total = 0;
        for(var i = 0; i < this.products.length; i++){
            total += this.products[i].price;
        }
        this.total = Math.round(total*100) / 100;
        return this.total;
    },
};
document.getElementById('img1').onmouseenter = function(){
    this.src = 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRj9-0-5vF7vM3ysqVIHAUcD14Pqb1_vF0UIDxhYyMxMLOeMRWN9oj8WXLDF2xe5eaduya_AOIKqXhNR3F-bX_Ea6mFyez42M5BWNBT1uXp&usqp=CAE';
}
document.getElementById('img1').onmouseleave = function(){
    this.src = 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR16CBT3H48bxbjMsOry6uw4pG7OgOAIQt1qF9IACcS5WpOlyJyF_0PpQs7HoBCXGZqG76kdOw0eSxqaXYWaFPmN7G8T6JB2HV8RUXLByM&usqp=CAE'
}
document.getElementById('img2').onmouseenter = function(){
    this.src = 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBLTW_Tye3nuiVHCFe3-3MZbLMuD1nzgGahKBtICozMB8yxfNZRx2mgzq4IWm3VCNJB2Bp07Nlf-me0rhXcn3MLkjw-qEl3RKk1NO-CLRGkdwLRTXRNx3m&usqp=CAE';
}
document.getElementById('img2').onmouseleave = function(){
    this.src = 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTXEgi7eKkm5AcIXLaKDgl80WjCl2WJ2p7RABhvsjqEtIdyEC_EsrODTsP6CO06JToJD88MT5IYENjd1kFr5jLqPAEuOJnRe7St3VZedbZq&usqp=CAE'
}
document.getElementById('img3').onmouseenter = function(){
    this.src = 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRSDVPUtyTJCg81Hf5Vd7_x_Ta-pIfCosPNkokPbegFq_iRz3B9cjRrADAdI9pgIeYKG1NDKZhPrnwDR00r_TemS8DLfdilga2r00Bcs3z8G9GIQUAuCI28&usqp=CAE';
}
document.getElementById('img3').onmouseleave = function(){
    this.src = 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTky-GVPvXjUUJFq8j_PacCOz1je_EJyemxURBOjfWQMOu7MoaNJq-eloJESGdjzE2tkEZPAMalxgNxFrRrYSKr8uBBOzamIXe0XNkYoj35sUzkB24gcPSF&usqp=CAE'
}
function displayCart(){
    if(cart.products.length === 0){
        document.getElementById('cart').innerHTML = '<h3>Aucun produit</h3>';
        document.getElementById('order').style.display = 'none';
        document.getElementById('disorder').style.display = 'none';
    } else {
        var cartCode = "";
        for(var i = 0; i < cart.products.length; i++){
            var product = cart.products[i];
            var div = "<div><strong>" + product.title + "</strong> : " + product.price + "</div>";
            cartCode += div;
        }

        cartCode += "<h2>TOTAL : " + cart.total.toString().replace('.', ',') + " &euro;</h2>";

        document.getElementById('cart').innerHTML = cartCode;
        document.getElementById('order').style.display = 'block';
        document.getElementById('disorder').style.display = 'block';
    }
}

function addProduct(id){
    var title = document.querySelector('#produit-' + id + ' h3').innerHTML;
    var price = Number(document.getElementById('prix-' + id).value);
    var product = {
        title: title,
        price: price,
    }
    cart.addProduct(product);
    displayCart();
}

var buttons = document.querySelectorAll('a.add');
for(var i = 0; i < buttons.length; i++){
    var button = buttons[i];
    button.onclick = function(){
        var id = Number(this.getAttribute('data-id'));
        addProduct(id);
    };
}
function removeProduct(id){
    var title = document.querySelector('#produit-' + id + ' h3').innerHTML;
    var price = Number(document.getElementById('prix-' + id).value);
    var product = {
        title: title,
        price: price,
    }
    cart.removeProduct(product);
    displayCart();
}

var remove = document.querySelectorAll('a.remove');
for(var j = 0; j < remove.length; j++){
    var rem = remove[j];
    rem.onclick = function(){
        var id = Number(this.getAttribute('data-id'));
        removeProduct(id);
    };
}
displayCart();