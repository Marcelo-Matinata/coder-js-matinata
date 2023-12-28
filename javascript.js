// prenetrega

let nombre;
let menu;
let menuProductos;
let idCarrito = [];
let carrito = [];
let total=0;
const cuchillo = {
    id: 12,
    nombre: 'cuchillo 14cm',
    precio: 7000
}
const set = {
    id: 2,
    nombre: 'Set 14cm',
    precio: 16000
}
const tabla = {
    id: 3,
    nombre: 'Tabla para comer',
    precio: 2000
}
const setparrilla = {
    id: 4,
    nombre: 'Set parrillero',
    precio: 22000
}

do {
    nombre = prompt("Bienvenido a Filo, ¿Cual es tu nombre?");
    if (nombre == null || nombre == '') {
        alert('Necesitas ingresar un nombre');
    }
} while (nombre == null || nombre == '')

alert('Hola ' + nombre);
console.log(nombre);
do {
    menu = prompt('Que accion desea realizar ' + nombre + '?\n\n1.- Añadir productos\n2.- Ver carrito\n3.- Suma total de los productos');
    if (menu == 1) {
        menuProductos = prompt('Selecciona el numero del producto que deseas agregar al carrito\n\n1. ' + cuchillo.nombre + '\n2. ' + set.nombre + '\n3. ' + tabla.nombre + '\n4. ' + setparrilla.nombre + '\n 5. Ninguno');
        if (menuProductos <= 5) {
            parseInt(idCarrito.push(menuProductos));
        } else {
            alert('Necesitas ingresar un opcion valida');
        }

    }
    else if (menu == 2) {
        for (let i = 0; i <= idCarrito.length; i++) {
            console.log(idCarrito[i])
            if (idCarrito[i] == cuchillo.id) {
                carrito.push(cuchillo.nombre+'\n');
            } else if (idCarrito[i] == set.id) {
                carrito.push(set.nombre+'\n');
            } else if (idCarrito[i] == tabla.id) {
                carrito.push(tabla.nombre+'\n');
            } else if (idCarrito[i] == setparrilla.id) {
                carrito.push(setparrilla.nombre+'\n');
            }
        }
        alert('Carrito:\n\n' + carrito);
        console.log(carrito);
    }
    else if(menu == 3){
        for (let i = 0; i <= idCarrito.length; i++) {
            if (idCarrito[i] == cuchillo.id) {
                total = total+cuchillo.precio;
            } else if (idCarrito[i] == set.id) {
                total = total+set.precio;
            } else if (idCarrito[i] == tabla.id) {
                total = total+tabla.precio;
            } else if (idCarrito[i] == setparrilla.id) {
                total = total+setparrilla.precio;
            }
        }
        alert('El precio total a pagar es de: $'+total+'Pesos Argentino')
    }
    
} while (menu != 3)