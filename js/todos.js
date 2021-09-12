async function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET" , url , false)
    await request.send()
    return request.responseText
}   

async function todos(){
    let data = await fazGet('https://jsonplaceholder.typicode.com/todos')
    let todos = JSON.parse(data);
    let cards =  document.getElementById('tabela-todos')

    todos.forEach(element => {
        // let fetch = document.getElementById('tabela')
        cards.innerHTML +=  `
            <div class="card">
             
                <div class="container">
                    <h4 style="font-size:20px">${element.id}</h4>
                    <p>${element.title}</p>
                    <img src=${element.completed ? "img/t.png" : "img/f.png"} alt="Avatar" style="width:50px">
                </div>
            </div>
            `
    });
}

todos()