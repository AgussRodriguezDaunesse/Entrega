const producto = [
    { Nombre: " sandwiches de miga", precio: 1000 },
    { Nombre: " gaseosa", precio: 500 },
    { Nombre: " helado", precio: 300 },
    { Nombre: " chips", precio: 800 },
    { Nombre: " pizzetas", precio: 700 },
]
let carrito = []

let seleccion = prompt("Bienvenido a SandwicheriaCapitan , desea comprar algo?, Si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("Porfavor ingrese si o no")
    seleccion = prompt("Hola cuantos desea comprar?")

}

if(seleccion == "si"){
    alert("Lista de Productos")
    let todoslosproductos = producto.map((producto) => producto.Nombre + " " + producto.precio + "$");
    alert (todoslosproductos.join(" - "))
} else if (seleccion == "no"){
    alert ("Gracias por consultarnos")
}

while (seleccion != "no"){
    let producto = prompt("Que producto deseas comprar?")
    let precio = 0

    if(producto == "sandwiches de miga" || producto == "gaseosa" || producto == "helado" || producto == "chips" || producto == "pizzetas") {
        switch(producto) {
    case "sandwiches de miga":
        precio = 1000;
        break;
        case "gaseosa":
            precio = 500;
            break;
            case "helado":
                precio = 300;
                break;
                case "chips":
                    precio = 800;
                    break;
                    case "pizzetas":
                        precio = 700;
                        break;
                        default:
                            break;
 }

 let unidades = parseInt(prompt("cuantos desea comprar"))
 carrito.push({producto, unidades, precio})
 console.log(carrito)
 } else {
    alert("no tenemos ese producto")
}
seleccion = prompt("desea seguir comprando?")
while(seleccion === "no") {
    alert("gracias por comprar!")
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total de compra${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
}

}
const total = carrito.reduce((acc,el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`)
