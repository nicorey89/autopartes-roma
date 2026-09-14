// ========================================
// LISTA DE VEHÍCULOS
// ========================================
//
// marcaId indica a qué marca pertenece
// cada vehículo.
//
// Ejemplo:
// marcaId: 1 → Fiat
// marcaId: 2 → Chevrolet
// marcaId: 3 → Volkswagen
// marcaId: 4 → Peugeot

const autos = [

  // ========================================
  // FIAT
  // ========================================

  {
    id: 1,
    marcaId: 1,
    marca: "Fiat",
    modelo: "Palio",
    nombre: "Fiat Palio F2",
    imagen: "/imagenes/autos/palio-fase2.png",
  },

  {
    id: 2,
    marcaId: 1,
    marca: "Fiat",
    modelo: "Palio",
    nombre: "Fiat Palio F3",
    imagen: "/imagenes/autos/palio-fase3.png",
  },


  // ========================================
  // CHEVROLET
  // ========================================

  {
    id: 3,
    marcaId: 2,
    marca: "Chevrolet",
    modelo: "Corsa",
    nombre: "Chevrolet Corsa",
    imagen: "/imagenes/autos/corsa.png",
  },

  {
    id: 4,
    marcaId: 2,
    marca: "Chevrolet",
    modelo: "Classic",
    nombre: "Chevrolet Classic",
    imagen: "/imagenes/autos/corsa.png",
  },


  // ========================================
  // VOLKSWAGEN
  // ========================================

  {
    id: 5,
    marcaId: 3,
    marca: "Volkswagen",
    modelo: "Gol",
    nombre: "Volkswagen Gol",
    imagen: "/imagenes/autos/gol.png",
  },

  {
    id: 6,
    marcaId: 3,
    marca: "Volkswagen",
    modelo: "Fox",
    nombre: "Volkswagen Fox",
    imagen: "/imagenes/autos/gol.png",
  },


  // ========================================
  // PEUGEOT
  // ========================================

  {
    id: 7,
    marcaId: 4,
    marca: "Peugeot",
    modelo: "207",
    nombre: "Peugeot 207",
    imagen: "/imagenes/autos/PEU207.jpg",
  },

];

export default autos;