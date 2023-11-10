///dom element



const carrusel = document.querySelector('.containerimg');

let indiceImagen = 0;

const  mostrarSiguienteImagen = () => {
  indiceImagen++;
  if (indiceImagen > 2) {
    indiceImagen = 0;
  }
  actualizarTransform();
}

const mostrarImagenAnterior = () => {
  indiceImagen--;
  if (indiceImagen < 0) {
    indiceImagen = 2;
  }
  actualizarTransform();
}

const actualizarTransform = () => {
  const desplazamiento = -indiceImagen * 35; // 100% para cada imagen
  carrusel.style.transform = `translateY(${desplazamiento}%)`;
}

// Lógica para avanzar y retroceder en el carrusel
document.addEventListener('DOMContentLoaded', () => {
  setInterval(mostrarSiguienteImagen, 3000); // Cambia de imagen cada 3 segundos (ajusta según sea necesario)
});






//array: product

let productos = [
  { 
    id: 1, 
    nombre: "Auriculares Power Sound", 
    descripcion: "Descripción del Producto 1", 
    precio: 19.99, 
    src: "/images/bg1.png" // Enlace a una imagen alternativa para Producto 1
  },
  { 
    id: 2, 
    nombre: "Auriculares Power Sound Blue", 
    descripcion: "Descripción del Producto 2", 
    precio: 29.99, 
    src: "/images/bg2.png" // Enlace a una imagen alternativa para Producto 2
  },
  { 
    id: 3, 
    nombre: "Bluetoth Blue hearphone", 
    descripcion: "Descripción del Producto 3", 
    precio: 39.99, 
    src: "/images/ph1.png" // Enlace a una imagen alternativa para Producto 3
  },
  { 
    id: 4, 
    nombre: "Bluetoth Red hearphone", 
    descripcion: "Descripción del Producto 4", 
    precio: 49.99, 
    src: "/images/ph2.png" // Enlace a una imagen alternativa para Producto 4
  },
  { 
    id: 5, 
    nombre: "Bluetoth Black hearphone", 
    descripcion: "Descripción del Producto 5", 
    precio: 59.99, 
    src: "/images/ph3.png" // Enlace a una imagen alternativa para Producto 5
  },
  { 
    id: 6, 
    nombre: "Urban Shoes woman Puma", 
    descripcion: "Descripción del Producto 6", 
    precio: 69.99, 
    src: "/images/pumWoman002-c.jpg" // Enlace a una imagen alternativa para Producto 6
  },
  { 
    id: 7, 
    nombre: "Urban Shoes woman Nike", 
    descripcion: "Descripción del Producto 7", 
    precio: 79.99, 
    src: "/images/nikWoman001-c.jpg" // Enlace a una imagen alternativa para Producto 7
  },
  { 
    id: 8, 
    nombre: "Adidas Men Shoes", 
    descripcion: "Descripción del Producto 8", 
    precio: 89.99, 
    src: "/images/adMen001-b.jpg" // Enlace a una imagen alternativa para Producto 8
  },
  { 
    id: 9, 
    nombre: "Nike Men Shoes", 
    descripcion: "", 
    precio: 99.99, 
    src: "" // Enlace a una imagen alternativa para Producto 9
  },
  { 
    id: 10, 
    nombre: "We are tribe edit- Fragance Benetton", 
    descripcion: "Descripción del Producto 10", 
    precio: 109.99, 
    src: "/images/WE-ARE-TRIBE-EDIT-90MLbENETTON.webp" // Enlace a una imagen alternativa para Producto 10
  }
  ,
  { 
    id: 11, 
    nombre: "Invictus Men 50ML- Paco Rabanne", 
    descripcion: "Descripción del Producto 10", 
    precio: 109.99, 
    src: "/images/invictus50mlEdt.jpg" // Enlace a una imagen alternativa para Producto 11
  }
];

// Puedes acceder a los elementos del array de la siguiente manera:
console.log(productos[0]); // Muestra el primer producto
console.log(productos[4]); // Muestra el quinto producto