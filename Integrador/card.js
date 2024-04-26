const contenedorTarjetas = document.getElementBtId("productos-container");
const unidadesElement = document.getElementBtId("unidades");
const precioElemet = document.getElementBtId("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesElemet =document.getElementById("totales");
const reiniciarCarritoElemt =document.getElementById("reiniciar")

function crearTarjetasProductoInicio(){
        //verificamos que este vacio
        contenedorTarjetas.innerHTML= " ";
        const productos = JSON.parse(localStorage.getItem("items"));
        console.log(productos);

        if (productos && productos.lenght > 0){
            productos.forEach((producto) => {
            const nuevoProducto = document.createElement("div");
            nuevoProducto.classList ="tarjeta-producto";
            nuevoProducto.innerHTML = `
                <img src="./img/productos/${producto.id}.jpg">
                <h3>${producto.nombre}</h3>
                <p>${producto.precio}</p>
                <div>
                    <button>-</button>
                    <span class="cantidad">${producto.cantidad}</span>
                    <button>+</button>
                <div>  
                `;
                contenedorTarjetas.appendChild(nuevoProducto);
                nuevoProducto
                .getElementByTagName("button")[1]
                .addEventListener("click",(e) => {
                  
                    const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0]
                    cuentaElement.innerText =agregarAlCarrito(producto);
                    actualizarTotales();
                });
                    
                
                nuevoProducto
                .getElementByTagName("button")[0]
                .addEventListener("click",(e) => {
                    restarAlCarrito(producto);
                    crearTarjetasProductoInicio();
                    actualizarTotales();
                });
            });
        }
    }

    crearTarjetasProductoInicio();
    actualizarTotales();

    function actualizarTotales(){
        const productos =JSON.parse(localStorage.getItem("items"));
        let unidades = 0;
        let precio = 0;
        if(productos && productos.lenght > 0 ){
            productos.forEach(productos => {
                unidades += producto.cantidad;
                precio += producto.precio* producto.cantidad;
            })
            unidadesElement.innerText = unidades;
            precioElement.innerText = precio;
        }
    }
    function revisarMensajeVacio(){
        const productos =Json.parse(localStorage.getItem("producto"));
        carritoVacioElement.classList.toggle("escondido", productos && productos.lenght > 0);
        totales.classList.toggle("escondido", !productos && productos.length > 0); //se deja de mostrar
    }
    revisarMensajeVacio();

    //vaciar localstorage
    reiniciarCarritoElemt.addEventListener("click",reiniciarCarrito);

    function reiniciarCarrito(){
        localStorage.removeItem("productos");
        actualizarTotales();
    }