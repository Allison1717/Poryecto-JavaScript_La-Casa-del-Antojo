let antojosJSON=[];
let dolarCompra;

let totalCarrito;
let contenedor = document.getElementById("misantojos");
let botonFinalizar = document.getElementById("finalizar");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

(carrito.length != 0)&&dibujarTabla();


function dibujarTabla(){
    for(const antojo of carrito){
        document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${antojo.id}</td>
            <td>${antojo.nombre}</td>
            <td>${antojo.precio}</td>
            <td><button class="btn btn-light" onclick="eliminar(event)">🗑️</button></td>
        </tr>
    `;
    }
    totalCarrito = carrito.reduce((acumulador,antojo)=> acumulador + antojo.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total a pagar $: "+totalCarrito;
}

function renderizarProds(){
    for(const antojo of antojosJSON){
        contenedor.innerHTML += `
            <div class="card col-sm-2">
                <img src=${antojo.foto} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${antojo.id}</h5>
                    <p class="card-text">${antojo.nombre}</p>
                    <p class="card-text">S/.${(antojo.precio)}</p>
                    <button id="btn${antojo.id}" class="btn btn-primary">Comprar</button>
                </div>
            </div>
        `;
    }
    antojosJSON.forEach(antojo => {
        document.getElementById(`btn${antojo.id}`).addEventListener("click",function(){
            agregarAlCarrito(antojo);
        });
    })
}
function agregarAlCarrito(antojoComprado){
    carrito.push(antojoComprado);
    console.table(carrito);
    Swal.fire({
        title: antojoComprado.nombre,
        text: 'Agregado al carrito',
        imageUrl: antojoComprado.foto,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: antojoComprado.nombre,
        showConfirmButton: false,
        timer: 1500
      })
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${antojoComprado.id}</td>
            <td>${antojoComprado.nombre}</td>
            <td>${antojoComprado.precio}</td>
            <td><button class="btn btn-danger" onclick="eliminar(event)"><i class="bi bi-trash3-fill"></i></button></td>
        </tr>
    `;
    totalCarrito = carrito.reduce((acumulador,antojo)=> acumulador + antojo.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total a pagar S/.: "+totalCarrito;
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

//Para eliminar los productos agregados al carrito
function eliminar(ev){
    console.log(ev);
    let fila = ev.target.parentElement.parentElement;
    console.log(fila);
    let id = fila.children[0].innerText;
    console.log(id);
    let indice = carrito.findIndex(antojo => antojo.id == id);
    console.log(indice)
    //eliminar producto del carrito
    carrito.splice(indice,1);
    console.table(carrito);
    //Eliminar la fila de la tabla
    fila.remove();
    //Una vez eliminado se tiene que volver a calcular el total a pagar
    let preciosAcumulados = carrito.reduce((acumulador,antojo)=>acumulador+antojo.precio,0);
    total.innerText="Total a pagar S/. : "+preciosAcumulados;
    //storage
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

//Con esta funcion se va a aobtener los productos.json
async function obtenerJSON() {
    const URLJSON="../scripts/antojos.json";
    const resp = await fetch(URLJSON);
    const data = await resp.json();
    antojosJSON = data;   
    renderizarProds();
}
obtenerJSON()

//Cerrando al compra
botonFinalizar.onclick = () => {
    if(carrito.length==0){
        Swal.fire({
            title: 'CARRITO VACIO',
            text: 'COMPRE ALGO, DE LO CONTRARIO PASE A LA SIGUIENTE PAGINA',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
          })
    }else{
        carrito = [];
        document.getElementById("tablabody").innerHTML="";
        let infoTotal = document.getElementById("total");
        infoTotal.innerText="Total a pagar S/.: ";
        Toastify({
            text: "En breves momentos recibira un email de confirmacion",
            duration: 3000,
            gravity: 'bottom',
            position: 'left',
            style: {
                background: 'linear-gradient(to right, #00b09b, #96c92d)'
            }
        }).showToast();

       
        localStorage.removeItem("carrito");
    }
    
}

