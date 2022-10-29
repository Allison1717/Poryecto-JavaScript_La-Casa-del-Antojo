const antojos = [{
        id: 1,
        foto: "../imagenes/pie_de_limon.jpg",
        nombre: "Pie de Limon",
        precio: 5.2
    },
    {
        id: 2,
        foto: "../imagenes/selva_negra.jpg",
        nombre: "Selva negra",
        precio: 4.9
    },
    {
        id: 3,
        foto: "../imagenes/hamburguesa_royal.jpg",
        nombre: "Hamburguesa Royal",
        precio: 11.5
    },
    {
        id: 4,
        foto: "../imagenes/batido_lucuma.jpg",
        nombre: "Batido de Lúcuma",
        precio: 8.5
    },
    {
        id: 5,
        foto: "../imagenes/pizza.jpg",
        nombre: "Pizza",
        precio: 19.9
    },
    {
        id: 6,
        foto: "../imagenes/alitas_broaster.jpg",
        nombre: "Alitas broaster",
        precio: 7.6
    },
    {
        id: 7,
        foto: "../imagenes/enchiladas.jpg",
        nombre: "Enchiladas",
        precio: 30
    },
    {
        id: 8,
        foto: "../imagenes/tacos.jpg",
        nombre: "Tacos",
        precio: 25.5
    },
    {
        id: 9,
        foto: "../imagenes/Frappuccino-de-fresa.jpg",
        nombre: "Frapuccino de Fresa",
        precio: 17
    },
    {
        id: 10,
        foto: "../imagenes/salchipapas.jpg",
        nombre: "Salchipapas",
        precio: 9.5
    },
    {
        id: 11,
        foto: "../imagenes/empanada.jpg",
        nombre: "Empanada",
        precio: 4.6
    },
    {
        id: 12,
        foto: "../imagenes/brownie_pizza.png",
        nombre: "Brownie Pizza",
        precio: 25
    },
];
const antojosStorage = [{ id: 1,  antojo: "Pie de Limon", precio: 5.2 },
                  {  id: 2,  antojo: "Selva negra", precio: 4.9 },
                  {  id: 3,  antojo: "Hamburguesa Royal"  , precio: 11.5},
                  {  id: 4,  antojo: "Batido de Lucuma" , precio: 8.5}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("listaAntojos", JSON.stringify(antojosStorage));

class Antojo {
    constructor(obj) {
        this.nombre  = obj.antojo.toUpperCase();
        this.precio  = obj.precio;
    }
    sumaIGV() {
        this.precio = this.precio * 0.18;
    }
}

//Obtenemos el listado de productos almacenado
const almacenados = JSON.parse(localStorage.getItem("listaAntojos"));
const antojos2 = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
for (const objeto of almacenados)
    antojos2.push(new Antojo(objeto));
//Ahora tenemos objetos productos y podemos usar sus métodos
for (const antojos of antojos2)
    antojos.sumaIGV();

console.log(antojos2);