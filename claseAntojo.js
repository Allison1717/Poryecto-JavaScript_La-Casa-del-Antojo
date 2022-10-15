class Antojo{
    constructor(id,nombre,precio, stock){
        this.id=id
        this.nombre=nombre
        this.precio=precio
        this.stock=stock
    }

}
//Crear un ID numérico dinámico
const creoID = ()=> parseInt(Math.random() * 20000) 

const agregarAntojos = ()=> {
    let id = creoID()
    let nomAntojo=prompt("Ingresa el nombre del Antojo: ")
    let preAntojo=prompt("Ingresa el precio del Antojo: S/ ")
    let stockAntojo=prompt("Ingresa el stock disponible "+nomAntojo+" : ")
    const an=new Antojo(nomAntojo,preAntojo,stockAntojo)
    if(nomAntojo.length>0 && preAntojo>0 && stockAntojo>0){
       antojos.push(new Antojo(id,nomAntojo,preAntojo,stockAntojo))
       alert("Se registró "+nomAntojo+" al MENU correctamente!!")
    }
    else{
        alert("Ingresó un dato incorrecto")
    }
        listarAntojos()
}

function listarAntojos() {
    console.table(antojos)
}

function generadorAntojos() {

    antojos.push(new Antojo(1234,"Pie de limon",5.2, 25))
    antojos.push(new Antojo(2345,"Selva negra",4.9,  25))
    antojos.push(new Antojo(3456,"Hamburguesa Royal",11.5,  25))
    antojos.push(new Antojo(4567, "Batido de Lucuma",8.5, 25))
    antojos.push(new Antojo(5678, "Alitas broaster",7.6, 25))
    antojos.push(new Antojo(6789, "Enchiladas",30, 25))
    antojos.push(new Antojo(7890, "Tacos",25.5, 25))
    antojos.push(new Antojo(8901, "Frapuccino de Fresa",17, 25))
    listarAntojos()
}
generadorAntojos()
function eliminarAntojo() {
    let quitarAntojo = prompt("Ingresa nombre del antojo que desea quitar del menú:")
    //ubicamos el índice del antojo a eliminar
    let posicion = antojos.indexOf(quitarAntojo) 
        if (posicion > -1) {
            let antojoQuitado = an.splice(posicion, 1) //quita un elemento desde un índice específico            
            console.log(antojoQuitado)
        }    
}

function buscarAntojo() {
    let buscar = prompt("Ingresa el antojo a buscar:")
    let resultado = antojos.find(elemento => elemento.nombre.includes(buscar))
        if (resultado === undefined) {
            console.warn("No se encontró el antojo a buscar")
        } else {
            console.log("El antojo buscado si se encuentra en el Menú: ", resultado)
        }
}

function ordenarAntojos_porNombre() {
    console.log("ORDEN DE ANTOJOS POR NOMBRE: ")
    let antojosEnOrden = antojos.sort((an1, an2)=> {
        if (an1.nombre > an2.nombre) {
            return 1
        }
        if (an1.nombre < an2.nombre) {
            return -1
        }
        return 0
    })
    console.table(antojosEnOrden)
}
function ordenarAntojos_porPrecio() {
    console.log("ORDEN DE ANTOJOS POR PRECIO: ")
    let antojosEnOrden = antojos.sort((an1, an2)=> {
        if (an1.precio > an2.precio) {
            return 1
        }
        if (an1.precio < an2.precio) {
            return -1
        }
        return 0
    })
    console.table(antojosEnOrden)
}