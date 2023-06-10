import relatedProducts from './relatedProducts.json' assert {type: 'json'};
const html=document.querySelector(".priority-products .row");


function showProduct(data){
    for (let i = 0; i < data.length; i++) {
        html.innerHTML+=`<div class="col">
        <div class="card h-100 text-center">
          <img src="${data[i].img}" class="card-img-top">
          <div class="card-body py-3">
            <h5><i class="fa-solid fa-star text-warning"></i>${data[i].rating} <span class="text-secondary" style="font-size: large; top: 0px;">(${data[i].comment} Yorum)</span></h5>
            <h6 class="text-secondary">${data[i].code}</h6>
            <h6 class="card-title">${data[i].title}</h>
            <h3 class="price"><i class="fa-solid fa-turkish-lira-sign"></i> ${data[i].dprice}</h3>
            <p class="text-secondary cargo">BUGÜN KARGODA</p>
            <button class="addCart w-100"><i class="fa-solid fa-arrow-right-arrow-left"></i><b>SEPETE EKLE</b></button>
          </div>
        </div>
      </div>`;
        
    }
}

showProduct(relatedProducts);










