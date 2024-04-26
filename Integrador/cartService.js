function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("items"));
    console.log(memoria);
    let cuenta=0;

    if(!memoria){
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem("items",JSON.stringify([nuevoProducto]));
        cuenta=1;

    } else {
        const indiceProducto = memoria.findIndex(item => item.id)
        console.log(indiceProducto)
        //sino lo encuentra
        if(indiceProducto === -1){
            const nuevaMemoria = memoria;
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto))
            cuenta=1;
        } else {
            nuevaMemoria[indiceProducto].cantidad ++;
            cuenta = nuevaMemoria[indiceProducto].cantidad;
        } 
            localStorage.setItem("items",JSON.stringify(nuevaMemoria));
            
        }
    actualizarNumeroCarrito();
    return cuenta;
}

function restarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem(items));
    const indiceProducto = memoria.findIndex(item => item.id === producto.id);

    if(memoria[indiceProducto].cantidad ===  1){
        memoria.splice(indiceProducto,1); //sacar el elemento
        
    }else{
        memoria[indiceProducto].cantidad --;
    }
    localStorage.setItem("items",JSON.stringify(memoria));
    actualizarNumeroCarrito();
}



/*TOMA EL PRODUCTO, LE AGREGA LA CANTIDAD Y LO DEVUELVE */
function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto = 1;
    return nuevoProducto;
}
/**/
const cuentaCarritoEment = document.getElementById("cuenta-carrito");
function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("items"));
    
    if(cuenta && memoria.length > 0){
        const cuenta = memoria.reduce((acum, current) => acum +current.cantidad,0); //reduce reduce a 1 numero
        cuentaCarritoEment.innerText = cuenta;
        console.log(cuenta)
     } else {
        cuentaCarritoEment.innerHTML=0;
     }
     
}
actualizarNumeroCarrito();