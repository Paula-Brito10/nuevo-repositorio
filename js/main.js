const productos = [
    {
        nombre: "Palitos Salados Krachitos",
        precio: 199.99,
        imagen: "img/1.webp",
        ofertas: false,
        descuento: true,
        combos: false, // Nueva propiedad para combos
    },
    {
        nombre: "Bastonitos de Queso Krachitos",
        precio: 599.99,
        imagen: "img/2.webp",
        ofertas: true,
        descuento: false,
        combos: false, // Nueva propiedad para combos
    },
    {
        nombre: "Papas Fritas sabor Cheddar",
        precio: 500.99,
        imagen: "img/3.webp",
        ofertas: false,
        descuento: false,
        combos: false, // Nueva propiedad para combos
    },
    // Agrega más productos aquí
    {
        nombre: "Nachos Macritas Sabor Queso",
        precio: 398,
        imagen: "img/4.webp",
        ofertas: false,
        descuento: true,
        combos: false, // Nueva propiedad para combos
    },
    {
        nombre: "Nachos Macritas Sabor Ketchup",
        precio: 467,
        imagen: "img/5.webp",
        ofertas: true,
        descuento: false,
        combos: false, // Nueva propiedad para combos
    },
    {
        nombre: "Papas Fritas Corte Americano",
        precio: 599.99,
        imagen: "img/6.webp",
        ofertas: false,
        descuento: false,
        combos: false, // Nueva propiedad para combos
    },
    {
        nombre: "Papas Fritas Sabor Jamon",
        precio: 630,
        imagen: "img/7.webp",
        ofertas: true,
        descuento: false,
        combos: false, // Nueva propiedad para combos
    },
    {
        nombre: "Papas Fritas Tradicional",
        precio: 700,
        imagen: "img/8.webp",
        ofertas: false,
        descuento: false,
        combos: false, // Nueva propiedad para combos
    },
    {
        nombre: "Papas Fritas Sin Sal",
        precio: 623,
        imagen: "img/9.webp",
        ofertas: false,
        descuento: false,
        combos: false, // Nueva propiedad para combos
    },
    {
        nombre: "Alfajor relleno con dulce de leche",
        precio: 384,
        imagen: "img/10.webp",
        ofertas: false,
        descuento: false,
        combos: false, // Nueva propiedad para combos
    },
    {
        nombre: "Alfajor relleno con dulce de frambuesa",
        precio: 400,
        imagen: "img/11.webp",
        ofertas: true,
        descuento: false,
        combos: false, // Nueva propiedad para combos
    },
    {
        nombre: "Alfajor dulce de frutos del bosque",
        precio: 450,
        imagen: "img/12.webp",
        ofertas: false,
        descuento: false,
        combos: false, // Nueva propiedad para combos
    },
    {
        nombre: "Almendras x240g",
        precio: 5693,
        imagen: "img/13.webp",
        ofertas: false,
        descuento: false,
        combos: false, // Nueva propiedad para combos
    },
    {
        nombre: "Nueces Orgánicas x250g",
        precio: 300,
        imagen: "img/14.webp",
        ofertas: false,
        descuento: true,
        combos: false, // Nueva propiedad para combos
    },
    {
        nombre: "Combo DULCES ARTESANALES",
        precio: 9300,
        imagen: "img/15.webp",
        ofertas: false,
        descuento: false,
        combos: true, // Nueva propiedad para combos
    },
    {
        nombre: "Combo Snacks",
        precio: 6300,
        imagen: "img/16.webp",
        ofertas: false,
        descuento: false,
        combos: true, // Nueva propiedad para combos
    },
    {
        nombre: "Combo Frutos Secos",
        precio: 8300,
        imagen: "img/17.webp",
        ofertas: false,
        descuento: false,
        combos: true, // Nueva propiedad para combos
    },
    {
        nombre: "MANI CROCANTE SABOR JAMON",
        precio: 234,
        imagen: "img/18.webp",
        ofertas: false,
        descuento: false,
        combos: false, // Nueva propiedad para combos
    },
    {
        nombre: "BIZCOCHOS DE ARROZ",
        precio: 356,
        imagen: "img/19.webp",
        ofertas: true,
        descuento: false,
        combos: false, // Nueva propiedad para combos
    },
];


document.addEventListener("DOMContentLoaded", function () {
    const filtroInput = document.getElementById("filtro");
    const mostrarOfertasButton = document.getElementById("mostrar-ofertas");
    const mostrarDescuentosButton = document.getElementById("mostrar-descuentos");
    const mostrarCombosButton = document.getElementById("mostrar-combos");
    const carritoProductos = document.getElementById("carrito-productos");
    const botonCarrito = document.getElementById("boton-carrito"); // Agregamos el botón "Carrito"


    // Carrito de compras
    const carrito = [];

    function mostrarProductos(soloOfertas, soloDescuentos, soloCombos) {
        carritoProductos.innerHTML = "";

        productos.forEach((producto) => {
            if (
                (!soloOfertas || producto.ofertas) &&
                (!soloDescuentos || producto.descuento) &&
                (!soloCombos || producto.combos)
            ) {
                const productoHTML = `
                    <article class="single-product">
                        <div class="product-image">
                            <img src="${producto.imagen}" alt="${producto.nombre}">
                            <div class="overlay">
                                <button class="Añadir_al_Carrito" data-nombre="${producto.nombre}" data-precio="${producto.precio}">Añadir al Carrito</button>
                            </div>
                        </div>
                        <div class="info">
                            <h3>${producto.nombre}</h3>
                            <p class="price">$${producto.precio}</p>
                        </div>
                    </article>
                `;
                carritoProductos.innerHTML += productoHTML;
            }
        });
    }

    // Agregamos un manejador de eventos para el botón "Carrito"
    botonCarrito.addEventListener("click", function () {
        if (carrito.length === 0) {
            alert("El carrito está vacío.");
        } else {
            let mensaje = "Carrito de Compras:\n";
            let total = 0;

            carrito.forEach((item) => {
                mensaje += `${item.nombre} - Precio: $${item.precio}\n`;
                total += item.precio;
            });

            mensaje += `\nMonto total a pagar: $${total.toFixed(2)}`;
            alert(mensaje);
        }
    });

    mostrarOfertasButton.addEventListener("click", function () {
        const soloOfertas = mostrarOfertasButton.dataset.mostrar === "true";
        mostrarOfertasButton.dataset.mostrar = soloOfertas ? "false" : "true";
        mostrarProductos(soloOfertas, false, false);
    });

    mostrarDescuentosButton.addEventListener("click", function () {
        const soloDescuentos = mostrarDescuentosButton.dataset.mostrar === "true";
        mostrarDescuentosButton.dataset.mostrar = soloDescuentos ? "false" : "true";
        mostrarProductos(false, soloDescuentos, false);
    });

    mostrarCombosButton.addEventListener("click", function () {
        const soloCombos = mostrarCombosButton.dataset.mostrar === "true";
        mostrarCombosButton.dataset.mostrar = soloCombos ? "false" : "true";
        mostrarProductos(false, false, soloCombos);
    });

    // Manejar el cambio en el campo de filtro
    filtroInput.addEventListener("input", function () {
        const filtro = filtroInput.value.toLowerCase();
        productos.forEach((producto) => {
            if (producto.nombre.toLowerCase().includes(filtro)) {
                producto.ofertas = true;
            } else {
                producto.ofertas = false;
            }
        });

        const soloOfertas = mostrarOfertasButton.dataset.mostrar === "true";
        const soloDescuentos = mostrarDescuentosButton.dataset.mostrar === "true";
        const soloCombos = mostrarCombosButton.dataset.mostrar === "true";
        mostrarProductos(soloOfertas, soloDescuentos, soloCombos);
    });

    // Inicialmente, muestra todos los productos
    mostrarProductos(false, false, false);

    // Añadir productos al carrito
    carritoProductos.addEventListener("click", function (event) {
        if (event.target.classList.contains("Añadir_al_Carrito")) {
            const nombre = event.target.dataset.nombre;
            const precio = parseFloat(event.target.dataset.precio);
            carrito.push({ nombre, precio });
        }
    });
});





