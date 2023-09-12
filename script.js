const produtos = [
    {
      id: 1,
      imagem:"./imagens/luffyG5.jpeg",
      tipo: "Figures",
      nome: "Luffy Gear 5",
      preço: 450, 
      texto: "Estatueta do Luffy Gear 5 do anime One piece"
    },
    {
        id: 2,
        imagem:"./imagens/Saint Seiya.jpeg",
        tipo:"Camisetas",
        nome: "Camisa Saint Seiya",
        preço: 70, 
        texto: "Camisa preta com estampa do anime Cavaleiros do Zodíaco"
    },
    {
        id: 3,
        imagem: "./imagens/images.jpeg",
        tipo:"Figures",
        nome: "Avatar",
        preço: 110,  
        texto: "Figura do filme Avatar"
    },
    {
        id: 4,
        imagem:"./imagens/91Jbu6HVLBL._AC_SX425_.jpg",
        tipo: "Acessórios",
        nome: "Luminária Star Wars",
        preço: 64.90, 
        texto: "Luminária de várias cores em forma da star killer do filme star wars"
    },
    {
        id: 5,
        imagem:"imagens/Vikis.jpeg",
        tipo:"Camisetas",
        nome: "Camisa Vikings",
        preço: 44.90,
        texto: "Camisa preta com estampa da série Vikings"
    },
    {
        id: 6,
        imagem:"imagens/Bleach.jpeg",
        tipo:"Figures",
        nome:"Funko Ichigo",
        preço: 250,
        texto: "Boneco estilo funko do Ichigo Kurosaki do anime Bleach"
    }
]

let cont = 0
let soma = 0
const botaoPesquisa = document.querySelector('#pBarra') 
const todos = document.querySelector('#todos')
const figures = document.querySelector('#figures')
const camisetas = document.querySelector('#camisetas')
const acessorios = document.querySelector('#acessorios')
const cards = document.querySelectorAll('.card')
const div = document.querySelector('.compras div')
const reserva =document.querySelector('.Reserva')
const produtosIncremento = document.querySelector('#incrementoProdutos')
function principal(parametro){
    const ul = document.querySelector('.cards')
    ul.innerHTML = ""
    if(produtosIncremento.innerText == 0){
        reserva.className = "hidden"
    }
    for(let i = 0; i < parametro.length; i++ ){
        let valor = document.querySelector('#precoProdutos')
        let incremento = document.querySelector('#incrementoProdutos')
        const li = document.createElement('li')
        li.className = 'card'
        const img = document.createElement('img')
        img.src = parametro[i].imagem
        img.alt = "Imagem"
        img.className = "imag"
        const tipo = document.createElement('div')
        tipo.className = "tipocard"
        tipo.innerText = parametro[i].tipo
        const nome = document.createElement('h3')
        nome.id = "nomecard"
        nome.innerText = parametro[i].nome
        const text = document.createElement('p')
        text.className = 'textoproduto'
        text.innerText = parametro[i].texto
        const preco = document.createElement('p')
        preco. id = "precocard"
        preco.innerText = `R$ ${parametro[i].preço.toFixed(2) }`
        const botao = document.createElement('button')
        botao.className= "adicionar"
        botao.innerText = "Carrinho"
        botao.id = parametro[i].id

        li.append(img,tipo,nome,text,preco,botao)
        ul.appendChild(li)
        



        botao.addEventListener('click', function carrinho(){
            cont++
            incremento.innerText = cont
            if(cont != 0){
                div.className = "hidden"
            }
            if(cont != 0){
                reserva.className = "Reserva"
            }
            
            for(let j = 0; j < parametro.length; j++){
                if(parametro[j].id == botao.id){
                    soma += parametro[j].preço
                    valor.innerText = `R$ ${soma.toFixed(2)}`
                    const compra = document.querySelector('.compras')
                    
                    const item = document.createElement('li')
                    item.className = "itemcompra"
                    const imgc = document.createElement('img')
                    imgc.id = "imagemcompra"
                    imgc.src = parametro[j].imagem
                    imgc.alt = "Item Carrinho"
                    const nomeC = document.createElement('p')
                    nomeC.innerText = parametro[j].nome
                    nomeC.id = "nomeprodutocompra"
                    const precoC = document.createElement('p')
                    precoC.innerText = `R$ ${parametro[j].preço.toFixed(2)}`
                    precoC.id = "precoprodutocompra"
                    const btn = document.createElement('button')
                    btn.className = "botaoprodutocompra"
                    btn.innerText = "Remover"
                    item.appendChild(imgc)
                    item.appendChild(nomeC)
                    item.appendChild(precoC)
                    item.appendChild(btn)
                    compra.appendChild(item)
                    btn.id = compra.children.length
                    
                    btn.addEventListener('click', function(){
                        cont-- 
                        incremento.innerText = cont
                        if(cont == 0){
                            div.className = "block"
                        }
                        if(cont == 0){
                            reserva.className = "hidden"
                        }
                        const carrinho = document.querySelectorAll('.compras')
                        item.remove()
                        soma -= parametro[j].preço
                        valor.innerText = `R$ ${soma.toFixed(2)}`

                        
                        })
                        
                    }
                    }})}
    
}

principal(produtos)



todos.addEventListener('click',function(){
        principal(produtos)
   })

figures.addEventListener('click', function(){
    let filtrado = []
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].tipo.toLowerCase() == "figures" ){
            filtrado.push(produtos[i])
        }
    }
    principal(filtrado)
    })

camisetas.addEventListener('click', function(){
    let filtrado = []
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].tipo.toLowerCase() == "camisetas" ){
            filtrado.push(produtos[i])
        }
    }
    principal(filtrado)
    })

acessorios.addEventListener('click', function(){
    let filtrado = []
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].tipo.toLowerCase() == "acessórios" ){
            filtrado.push(produtos[i])
        }
    }
    principal(filtrado)
    
    })

botaoPesquisa.addEventListener('click',function(){
    let filtrado = []
    let input = document.querySelector('#barra')    
    let valor = input.value
    for(let i = 0; i < produtos.length; i++ ){
        if(produtos[i].nome.toLowerCase().includes(valor.toLowerCase())){
            filtrado.push(produtos[i])
        }
    }
    principal(filtrado)
    })