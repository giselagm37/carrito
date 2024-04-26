//conexion con la api
const cargar = async() => { //funcion asincrona
try{
   
        const respuesta = await fetch('https://fakestoreapi.com/products/') //peticion
        
        console.log(respuesta); //promesa

        //si la respuesta es correcta
        if(respuesta.status === 200){
            const datos =await respuesta.json(); //informacion jason que devuelve la peticion
            //accedemos a los datos
            

            let productos= '';  //de cada pelicula
            datos.forEach(productos => {  //por cada elemento quiero acceder a 
                productos += `
                <div class="producto">
                <img class=" " src=" "${producto.poster_path}">
                <h3 class="titulo">${producto.title}</h3>
                <h3 class="precio">${producto.precio}</h3>
            </div>     
            `
           
            })
            document.getElementById('contenedor').innerHTML = productos;
        }
      
       
       //capturamos el error si no se puede ejecutar 
  } catch(error){
      console.log(error);
  }

}
cargar();