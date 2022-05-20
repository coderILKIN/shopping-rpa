let input = document.querySelector("input");
let btn = document.querySelector(".orng");
let modalBody = document.querySelector(".modal-body");
let imgs = document.querySelector("img");
let cardTitl= document.querySelector(".title");
let prices = document.querySelector(".cost").textContent;
let brands = document.querySelector(".brand").textContent;


let price = localStorage.setItem("costValue",prices);
let brand = localStorage.setItem("BrandValue",brands);





let url =localStorage.getItem("url");
imgs.src=url;
let titles = localStorage.getItem("title");
cardTitl.innerText = titles; 


input.addEventListener("click",function () {
    localStorage.setItem("InputValue",input.value);
})

btn.addEventListener("click",function () {
    

let value =localStorage.getItem("InputValue");
let bascetCount = document.querySelector("sup");
bascetCount.innerText = value;

 let container = document.createElement("div");
 container.className= "container"
 let row = document.createElement("div");
 row.className= "row"
 let imgDiv = document.createElement("div");
 imgDiv.className= "col-lg-6";
 let img = document.createElement("img");
 img.style.width="100%";
 let about = document.createElement("div");
 about.className= "col-lg-6";
 let title = document.createElement("h5");
 let brend = document.createElement("p");
 let cost = document.createElement("h2");
 let count = document.createElement("p");
 count.innerText = `Count: ${value}`;



 modalBody.appendChild(container);
 container.appendChild(row);

 row.appendChild(imgDiv);
 imgDiv.appendChild(img);

 row.appendChild(about);
 about.appendChild(title);
 about.appendChild(brend);
 about.appendChild(cost);
 about.appendChild(count)

 img.src= localStorage.getItem("url");
 title.innerText=localStorage.getItem("title");
 cost.innerText=localStorage.getItem("costValue");
 brend.innerText = localStorage.getItem("BrandValue");

 brend.style.color = "orange";
 cost.style.color = "red";



//  localStorage.setItem("ImgValue",cardImg);
//  localStorage.setItem("TitleValue",cardImg);
//  localStorage.setItem("BrendValue",cardImg);
//  localStorage.setItem("costValue",cardImg);


    

})
