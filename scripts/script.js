//const carrito = [];
let totalCarrito;
let contenedor = document.getElementById("misantojos");
let botonFinalizar = document.getElementById("finalizar");
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
if (carrito.length != 0) {
    console.log("Recuperando carro")
    
    dibujarTabla();
    
}
function dibujarTabla(){
    for(const antojos of carrito){
        document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${antojos.id}</td>
            <td>${antojos.nombre}</td>
            <td>${antojos.precio}</td>
        </tr>
    `;
    }
    totalCarrito = carrito.reduce((acumulador,antojos)=> acumulador + antojos.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total a pagar S/ "+totalCarrito;
}
function renderizarProds() {
    for (const antojo of antojos) {
        contenedor.innerHTML += `
      
            <div class="card me-2 shadow-lg p-3 mb-5 bg-body rounded" style="width: 17rem;">
                <img src=${antojo.foto} class="card-img-top" alt="..." height="300px" width="500px">
                <div class="card-body">
                    <h5 class="card-title text-center text-secondary letraNavBar">${antojo.id}</h5>
                    <h4 class="card-text text-center letraNavBar">${antojo.nombre}</h4>
                    <h2 class="card-text text-center text-success letraNavBar">S/. ${antojo.precio}</h2>
                    <p class="card-text text-center letraNavBar"><small class="text-muted">Disponible</small></p> 
                    <button id="btn${antojo.id}" type="button" class="btn btn-outline-success letraNavBar">Comprar</button>
                    <img src="../imagenes/carrito-de-compras.png" alt="carrito-de-compras" height="50px" width="50px">        
                </div>
            </div>
        
        `;
    }


    //EVENTOS
    antojos.forEach(antojos => {
        //evento para cada boton
        document.getElementById(`btn${antojos.id}`).addEventListener("click", function () {
            agregarAlCarrito(antojos);
        });
    })
}

renderizarProds();

function agregarAlCarrito(antojosComprado) {
    carrito.push(antojosComprado);
    console.table(carrito);
    Swal.fire({
        title: antojosComprado.nombre,
        text: 'Agregado al carrito',
        imageUrl: antojosComprado.foto,
        imageWidth: 500,
        imageHeight: 300,
        imageAlt: antojosComprado.nombre,
        showConfirmButton: false,
        timer: 1500
    })
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${antojosComprado.id}</td>
            <td>${antojosComprado.nombre}</td>
            <td>${antojosComprado.precio}</td>
            <td><button><i class="bi bi-trash3-fill"></i></button> </td>
        </tr>
    `;
    totalCarrito = carrito.reduce((acumulador, antojos) => acumulador + antojos.precio, 0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText = "Total a pagar S/ " + totalCarrito;
    //storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

botonFinalizar.onclick = () => {
    
    carrito = [];
    document.getElementById("tablabody").innerHTML = "";
    let infoTotal = document.getElementById("total");
    infoTotal.innerText = "Total a pagar S/ ";
    
    Toastify({
        text: "Pronto recibirá un mail de confirmacion",
        duration: 3000,
        gravity: 'bottom',
        position: 'center',
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        }
    }).showToast();
    
    localStorage.removeItem("carrito"); 
}





