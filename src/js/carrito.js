const contenedorTarjetas = document.getElementBtId("productos-container")
//recibe array DE PRODUCTOS
function crearTarjetasProductoInicio(productos){ //lee el array y crea
    //ciclamos LOS PRODUCTOS
    productos.forEach(producto => {   
        //creo un elemento por cada uno          
        const nuevoProducto = document.createElemt("div"); //creo un elemento
        nuevoProducto.classList ="tarjeta-producto";
        //lo que va en cada tarjeta agrego cada producto
        nuevoProducto.innerHTML = `                    
        <img src="./img/productos/${producto.id}.jpg">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button>Agregar al carrito</button>
        `
        contenedorTarjetas.appendChild(nuevoProducto); //
        nuevoProducto.getElementByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
        
    });
}
//envio el array de donde tiene que cargar
crearTarjetasProductoInicio(items)