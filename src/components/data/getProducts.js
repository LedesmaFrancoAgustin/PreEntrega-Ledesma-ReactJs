const products = [
{  
    id:"01",
    category: "soportes",
    name: "Venom",
    Image: "https://http2.mlstatic.com/D_NQ_NP_904538-MLC50030576750_052022-O.webp",
    description:"Un soporte de celular impreso en 3D de Venom es un accesorio diseñado para mantener tu teléfono de forma segura y con estilo. Inspirado en el icónico personaje de Venom de Marvel, este soporte presenta un diseño detallado y aterrador que captura la esencia del simbionte.",
    price:"5000",
},
{  
    id:"02",
    category: "mates",
    name: "Mate Chimuelo",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCOkQjhEDhdWU2wSTnj54rMxh0iL0r9VQWrxTU5faUCA&s",
    description:"Un mate de Chimuelo impreso en 3D es una pieza de coleccionista que combina la tradición de la infusión de yerba mate con la magia de la película Cómo entrenar a tu dragón. Este mate presenta una elaborada impresión en 3D del querido personaje Chimuelo, el dragón sin dientes de la película, con un nivel impresionante de detalle y fidelidad al diseño original.",
    price:"8000",
},
{  
    id:"03",
    category: "mates",
    name: "Mate Groot",
    Image: "https://fbi.cults3d.com/uploaders/15680382/illustration-file/65216ba2-d361-440b-a223-1feedc5c064a/IMG_20200421_142948.jpg",
    description:"Un mate de Groot impreso en 3D es una obra maestra que combina la tradición del mate con la querida figura del personaje Groot del universo de Marvel. Este mate presenta una impresionante impresión en 3D de Groot, el carismático árbol humanoide de los Guardianes de la Galaxia, con un alto nivel de detalle y fidelidad al diseño original",
    price:"5000",
},
{  
    id:"04",
    category: "munecos",
    name: "Copa del Mundo",
    Image: "https://http2.mlstatic.com/D_NQ_NP_743327-MLA51386816009_092022-O.webp",
    description:"Hecha con una impresión en 3D de alta calidad, esta copa del mundo captura los intrincados detalles del trofeo real, incluyendo sus curvas, relieves y texturas. Es una pieza de colección que puede exhibirse con orgullo en tu hogar, oficina o cualquier lugar que desees destacar el espíritu deportivo.",
    price:"10000",
},

]

const getProducts = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(products)
    }, 3000);
});

export default getProducts;