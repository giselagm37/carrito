const contenedorTarjetas = document.getElementBtId("productos-container")

function crearTarjetasProductoInicio(productos){ //lee el array y crea
    productos.forEach(producto => {             
        const nuevoProducto = document.createElemtById("div"); //creo un elemento
        nuevoProducto.classList ="tarjeta-producto";
        //lo que va en cada tarjeta
        nuevoProducto.innerHTML = `                    
        <img src="./img/productos/${producto.id}.jpg">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button>Agregar al carrito</button>
        `
        contenedorTarjetas.appendChil(nuevoProducto); //
        nuevoProducto.getElementByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
        
    });
}
crearTarjetasProductoInicio(items)