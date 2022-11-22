var allProducts = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var btn = document.querySelector("#addToCart")
var totalPrice = 0 ;
var Show = document.querySelector("#showPrice")

allProducts.forEach(function(item){
    item.onclick = function(){
        totalPrice += parseInt(item.getAttribute("price"))
        content.style.color = "white";
        content.innerHTML += item.textContent + " &hearts; ";
        Show.style.color = "white"

        if (content.innerHTML != "" ){
            btn.style.display = "block";
        }
    }
})
btn.onclick = function(){
    Show.innerHTML = totalPrice
}
