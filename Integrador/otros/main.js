const serverUrl = 'http://127.0.01:5500/';
const itemsPath = 'items/';   //variables
const imagenesPath = 'img/';

window.onload = getData() //cuando carga el archivo ejecuta la funcion definimos lo que queremos

const items =document.querySelector('.items');
console.log('Hola')

function getData(){
    fetch(`${serverUrl}${itemsPath}`)
    .then((res) => res.json())
    .then((data) => printData(data))
}
function printData(data){ //recibe data
    const itemContenedor = document.createElement('div')
    itemContenedor.className ='row'

    data.forEach(item => {   //evita el forEach gigante,+= se van acumulando si solo tiene= trae el ultimo
        itemContenedor.innerHTML += createDomElement(item)
        item.append(itemContenedor) //se van guardando

    })
}
function createDomElement(item){
    const itemHTML = `
    <div class="card">
        <h3 class="titulo">${item.title}</h3>
        <img  class="imagen" src=${serverUrl}${imagenesPath}${item.image} alt=""> 
    
        <div class="detalle">
        <h4 class="precio"> ${item.precio}</h4>
        <button class="buton">AÑADIR AL CARRITO </button>
        </div>
    </div>`
    return itemHTML
}