import{r as s}from"./utils-BNP7OC3i.js";function r(e){const t=e.FinalPrice<e.SuggestedRetailPrice,a=t?Math.round((e.SuggestedRetailPrice-e.FinalPrice)/e.SuggestedRetailPrice*100):0;return`
    <li class="product-card">
      <a href="/product_pages/?product=${e.Id}">
        <img src="${e.Images.PrimaryMedium}" alt="${e.Name}">
        <h3>${e.Brand.Name}</h3>
        <p>${e.NameWithoutBrand}</p>
        <p class="product-card__price">$${e.FinalPrice}</p>
        ${t?`<span class="product-card__discount">-${a}% OFF</span>`:""}
      </a>
    </li>
    `}class n{constructor(t,a,i){this.category=t,this.dataSource=a,this.listElement=i}async init(){console.log(`Loading products for category: ${this.category}`);const t=await this.dataSource.getData(this.category);console.log(t),this.renderList(t)}renderList(t){s(r,this.listElement,t)}}export{n as P};
