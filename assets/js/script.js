fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(datas => {
       
       let container = document.querySelector(".container");
       let row = document.createElement("div");
       row.className = "row justify-content-center mt-5";
       

       for (let i = 0; i < datas.length-4900; i++) {
            let card = document.createElement("div");
            let forimg = document.createElement("div");
            let imgone = document.createElement("img");
            let thumbnailUrl = document.createElement("img");
            let card_body = document.createElement("div");
            let title = document.createElement("h5") ;
            let text = document.createElement("p");   
            let link_body = document.createElement("div");
            let link = document.createElement("a");

            card.className = "card mt-5"
            card.style.width = "18rem";
            forimg.className = "image d-flex"
            imgone.className = "image-one mt-2"
            imgone.style.width = "150px";
            thumbnailUrl.className = "image-two ms-3"
            thumbnailUrl.style.width = "100px";
            card_body.className = "card-body";
            title.className = "card-title";
            text.className = "card-parag";
            link_body.className = "card-link-body";
            link.className = "card-link";
            link.innerText = "If you show datas click here";

            imgone.src = datas[i].url;
            thumbnailUrl.src = datas[i].thumbnailUrl;
            title.innerText = datas[i].id;
            text.innerText = datas[i].title;
            link.href = "./link.html"

            forimg.appendChild(imgone);
            forimg.appendChild(thumbnailUrl);
            card_body.appendChild(title);
            card_body.appendChild(text);
            link_body.appendChild(link);

            card.appendChild(forimg);
            card.appendChild(card_body);
            card.appendChild(link_body);
            row.appendChild(card);

            link.addEventListener("click", function(){
                 localStorage.setItem("url",datas[i].url)
                 localStorage.setItem("thumbnailUrl". datas[i].thumbnailUrl)
                 localStorage.setItem("id", datas[i].id)
                 localStorage.setItem("title",datas[i].title)
            })
       }

       container.appendChild(row);
       console.log(container);
  });
