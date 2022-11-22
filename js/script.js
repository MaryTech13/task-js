var allProducts = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var btn = document.querySelector("#addToCart")
var totalPrice = 0 ;
var Show = document.querySelector("#showPrice")

allProducts.forEach(function(item){
    item.onclick = function(){
        totalPrice += parseInt(item.getAttribute("price"))
        content.style.color = "white";
        content.innerHTML += " &hearts;" + item.textContent + " &hearts; ";
        Show.style.color = "white"
        Show.style.fontSize = "35px"

        if (content.innerHTML != "" ){
            btn.style.display = "block";
            Show.style.backgroundColor = "transparent"
            Show.style.borderRadius = "20px"
            Show.style.margin ="25px auto"
        }
    }
})
btn.onclick = function(){
    Show.innerHTML = totalPrice + "$";
    Show.style.display = "block"
}