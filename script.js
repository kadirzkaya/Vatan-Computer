const cart=document.querySelectorAll(".addCart");
const cartBadge=document.querySelector(".carts .badge");


if(localStorage.getItem("cartItem")){
    cartBadge.innerText=localStorage.getItem("cartItem");
}

cart.forEach(f=>{
    f.addEventListener("click",(e)=>{
        if(localStorage.getItem("cartItem")){
            localStorage.setItem("cartItem",Number(localStorage.getItem("cartItem"))+1)
        }else{
            localStorage.setItem("cartItem",1)
        }
        cartBadge.innerText=localStorage.getItem("cartItem");
    });
})