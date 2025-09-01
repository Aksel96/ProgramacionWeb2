const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("#############################################################################");
    console.log("\t===========KIOSKO FES ARAGON============");
    console.log("\t   1) Papas Fritas..............$17     ");
    console.log("\t   2) Vaso de Frutas............$25     ");
    console.log("\t   3) Jugo de Naranja...........$30     ");
    console.log("\t   4) Agua de Jamaica...........$15     ");
    console.log("\t   5) Torta de jamon............$25     ");
    console.log("Elige la opcion del producto a comprar y la cantidad separados por una coma.");
    console.log("\t Ejemplo: 3,4 (Compra 4 jugos de naranja)");
    console.log("\t Escribe 'fin' para terminar");
    console.log("#############################################################################");
}

const productos = [
    { id: 1, nombre: "Papas Fritas", precio: 17 },
    { id: 2, nombre: "Vaso de Frutas", precio: 25 },
    { id: 3, nombre: "Jugo de Naranja", precio: 30 },
    { id: 4, nombre: "Agua de Jamaica", precio: 15 },
    { id: 5, nombre: "Torta de jamon", precio: 25 }
];

function calcularTotales(compras) {
    let subtotal = 0;

    compras.forEach(c => {
        subtotal += c.cantidad * c.precio;
    });

    let iva = subtotal * 0.16;
    let total = subtotal + iva;

    return { subtotal, iva, total };
}

function mostrarResumen() {
    console.log("########################## RESUMEN DE COMPRAS ###############################");
    compras.forEach(c => {
        let subtotal = c.cantidad * c.precio;
        console.log(`${c.producto} x ${c.cantidad} ($${c.precio} c/u) = $${subtotal}`);
    });
    console.log("#############################################################################");
    let { subtotal, iva, total } = calcularTotales(compras);
    console.log("Subtotal:\t $" + subtotal.toFixed(2));
    console.log("IVA (16%):\t $" + iva.toFixed(2));
    console.log("TOTAL:\t\t $" + total.toFixed(2));
    console.log("#############################################################################");
    console.log("Gracias por su compra, vuelva pronto!");
}

let compras = [];

function preguntar() {
    rl.question("Selecciona producto y cantidad (ejemplo: 2,4): ", (entrada) => {
        if (entrada.toLowerCase() === "fin") {
            if (compras.length === 0) {
                console.log("No registraste ninguna compra.");
            } else {
                mostrarResumen();
            }
            rl.close();
            return;
        }

        let [idStr, cantidadStr] = entrada.split(",");
        let id = parseInt(idStr);
        let cantidad = parseInt(cantidadStr);

        let producto = productos.find(p => p.id === id);
        if (!producto) {
            console.log("Producto no válido.");
        } else if (isNaN(cantidad) || cantidad <= 0) {
            console.log("La cantidad debe ser un número válido.");
        } else {
            compras.push({ producto: producto.nombre, cantidad, precio: producto.precio });
            console.log(`Añadido: ${cantidad} x ${producto.nombre} ($${producto.precio} c/u) = $${producto.precio * cantidad}\n`);
        }

        preguntar();
    });
}

menu();
preguntar();
