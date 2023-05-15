const playstation = [
  { nombre: "GOD Ragnarok", precio: 20000 },
  { nombre: "RE Remake 4", precio: 20000 },
  { nombre: "HF Zero Dawn", precio: 17000 },
  { nombre: "Fifa 23", precio: 15000 },
];

const xbox = [
  { nombre: "Starfield", precio: 20000 },
  { nombre: "Halo Infinite", precio: 20000 },
  { nombre: "Forza Horizon 5", precio: 17000 },
  { nombre: "Fifa 23", precio: 15000 },
];

const nintendo = [
  { nombre: "Zelda BOTW", precio: 20000 },
  { nombre: "Pokemon Espada", precio: 17000 },
  { nombre: "Mario Bross Go", precio: 15000 },
  { nombre: "Monster Hunter", precio: 8000 },
];

let carrito = [];

function seleccionDeConsola() {
  let consolaValida = false;
  while (!consolaValida) {
    const consola = prompt("Bienvenido/a a Dementesgamers. Por favor seleccione su consola: Playstation, Xbox o Nintendo");
    switch (consola.toLowerCase()) {
      case "playstation":
        const playstationList = playstation.map(
          (producto) => producto.nombre + " - " + "$" + producto.precio
        );
        alert(`Productos disponibles para Playstation: ${playstationList.join("\n")}`);
        comprar(consola); 
        consolaValida = true;
        break;
      case "xbox":
        const xboxList = xbox.map(
          (producto) => producto.nombre + " - " + "$" + producto.precio
        );
        alert(`Productos disponibles para Xbox: ${xboxList.join("\n")}`);
        comprar(consola); 
        consolaValida = true;
        break;
      case "nintendo":
        const nintendoList = nintendo.map(
          (producto) => producto.nombre + " - " + "$" + producto.precio
        );
        alert(`Productos disponibles para Nintendo: ${nintendoList.join("\n")}`);
        comprar(consola); 
        consolaValida = true;
        break;
      default:
        alert("Disculpe pero solo contamos con Playstation, Xbox o Nintendo");
        break;
    }
  }
}

function comprar(consola) {
  let id = "";
  while (id !== "salir") {
    id = prompt(`Ingrese el nombre del producto que desea comprar para la consola ${consola} o escriba "salir" para finalizar su compra:`);
    if (id === "salir") {
      break;
    }
    let productos;
    switch (consola) {
      case "playstation":
        productos = playstation;
        break;
      case "xbox":
        productos = xbox;
        break;
      case "nintendo":
        productos = nintendo;
        break;
      default:
        break;
    }

    const producto = productos.find((p) => p.nombre === id);
    if (producto) {
      let cantidad = parseInt(prompt("¿Cuántas unidades desea comprar?"));
      if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingrese aunque sea un juego.");
        continue;
      }
      carrito.push({ id: producto.nombre, precio: producto.precio, cantidad });
    } else {
      alert("Producto no válido");
    }
  }
}

function calcularTotalCompra() {
  let total = 0;
  let detalleCompra = "";
  for (let i = 0; i < carrito.length; i++) {
    let item = carrito[i];
    let subtotal = item.precio * item.cantidad;
    total += subtotal;
    detalleCompra += `- ${item.id} x ${item.cantidad} = $${subtotal}\n`;
  }
  detalleCompra += `\nTotal a pagar: $${total}`;
  return detalleCompra;
}

function saludo() {
  const nombre = prompt("Ingrese su nombre");
  const apellido = prompt("Ingrese su apellido");
  const telefono = prompt("Ingrese su número de teléfono");
  let datosComprador = `Nombre: ${nombre} Apellido: ${apellido} Telefono: ${telefono}`;
  return datosComprador;
}

let validacionDatos = prompt(`Tus datos: ${saludo()} ¿Son correctos? Responda con "si" o "no"`);

while (validacionDatos !== "si" && validacionDatos !== "no") {
  validacionDatos = prompt(`Responda con "si" o "no"`);
}

seleccionDeConsola();

alert(`Detalle de su compra:\n\n${calcularTotalCompra()}`);