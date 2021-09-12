function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET" , url , false)
    request.send()
    return request.responseText
}   

function criaLinha(posts){
    linha = document.createElement("tr");

    tdId = document.createElement("td");
    tdTile = document.createElement("td")
    tdBody = document.createElement("td")

    tdId.innerHTML = posts.id
    tdTile.innerHTML = posts.title
    tdBody.innerHTML = posts.body

    linha.appendChild(tdId);
    linha.appendChild(tdTile);
    linha.appendChild(tdBody);

    return linha;

}

function posts(){
    let data = fazGet('https://jsonplaceholder.typicode.com/posts')
    let posts = JSON.parse(data);
    let cards =  document.getElementById("tabela-posts");
    posts.forEach(element => {
        cards.innerHTML +=  `
           <div class="card">
               <div class="container">
                   <h4 style="font-size:20px">${element.id}</h4>
                   <h2 style ="color:black" > ${element.title}</h2>
                   <p>${element.body}</p>
           </div>
           `
   });
}
posts()