import{l as d,u as c,g as o}from"./utils-RXNiSnTa.js";d();const i=document.getElementById("cart-total-price"),a=document.querySelector(".cart-footer");function s(){const t=o("so-cart");if(!t||t.length===0){a.classList.add("hide"),document.querySelector(".product-list").innerHTML="<p>Your cart is empty</p>";return}else a.classList.remove("hide"),i.textContent=`$${l(t)}`;console.log(t);const r=t.map(e=>u(e));document.querySelector(".product-list").innerHTML=r.join(""),m()}function l(t){return t.reduce((r,e)=>r+e.FinalPrice,0)}function u(t){return`<li class="cart-card divider" data-id="${t.Id}">
    <a href="/product_pages/?products=${t.Id}" class="cart-card__image">
      <img src="${t.Image}" alt="${t.Name}" />
    </a>
    <a href="/product_pages/?products=${t.Id}">
      <h2 class="card__name">${t.Name}</h2>
    </a>
    <button class="cart-card__remove" data-id="${t.Id}">X</button>
    <p class="cart-card__color">${t.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${t.FinalPrice}</p>
  </li>`}function m(){document.querySelector(".product-list").addEventListener("click",function(t){t.target.classList.contains("cart-card__remove")&&confirm("Are you sure you want to remove this item from your cart?")&&p(t.target.dataset.id)})}function p(t){const e=(o("so-cart")||[]).filter(n=>n.Id!==t);localStorage.setItem("so-cart",JSON.stringify(e)),c(),s()}s();document.addEventListener("DOMContentLoaded",()=>{c()});
