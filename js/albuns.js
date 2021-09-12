function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET" , url , false)
    request.send()
    return request.responseText
}   

function criaLinha(albuns){
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdTile = document.createElement("td")

    tdId.innerHTML = albuns.id
    tdTile.innerHTML = albuns.title

    linha.appendChild(tdId);
    linha.appendChild(tdTile);

    return linha;

}

function albuns(){
    let data = fazGet('https://jsonplaceholder.typicode.com/albums')
    let albuns = JSON.parse(data);
    let cards =  document.getElementById("tabela-albuns");
    albuns.forEach(element => {
         cards.innerHTML +=  `
            <div class="card">
                <div class="container">
                    <h4 style="font-size:20px">${element.id}</h4>
                    <p>${element.title}</p>
            </div>
            `
    });
}
albuns()