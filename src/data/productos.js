// ========================================
// LISTA DE REPUESTOS
// ========================================
//
// autoId relaciona el repuesto con un vehículo.
//
// El buscador utiliza:
// - nombre
// - categoria
// - marca
// - modelo
// - nombre del vehículo

const productos = [

  // ========================================
  // FIAT PALIO
  // ========================================

  {
    id: 1,
    autoId: 1,

    nombre: "Guardabarros Fiat Palio Fase 2",

    categoria: "Guardabarros",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/gol-guardabarros.jpg",
  },

  {
    id: 2,
    autoId: 1,

    nombre: "Guardabarros Fiat Palio Fase 3",

    categoria: "Guardabarros",

    marca: "Fiat",

    modelo: "Palio Fase 3",

    imagen:
      "/imagenes/repuestos/gol-guardabarros.jpg",
  },

  {
    id: 3,
    autoId: 1,

    nombre: "Óptica Fiat Palio",

    categoria: "Ópticas",

    marca: "Fiat",

    modelo: "Palio",

    imagen:
      "/imagenes/repuestos/gol-guardabarros.jpg",
  },


  // ========================================
  // FIAT SIENA
  // ========================================

  {
    id: 4,
    autoId: 2,

    nombre: "Guardabarros Fiat Siena",

    categoria: "Guardabarros",

    marca: "Fiat",

    modelo: "Siena",

    imagen:
      "/imagenes/repuestos/gol-guardabarros.jpg",
  },


  // ========================================
  // CHEVROLET CORSA
  // ========================================

  {
    id: 5,
    autoId: 3,

    nombre: "Guardabarros Chevrolet Corsa",

    categoria: "Guardabarros",

    marca: "Chevrolet",

    modelo: "Corsa",

    imagen:
      "/imagenes/repuestos/gol-guardabarros.jpg",
  },

  {
    id: 6,
    autoId: 3,

    nombre: "Óptica Chevrolet Corsa",

    categoria: "Ópticas",

    marca: "Chevrolet",

    modelo: "Corsa",

    imagen:
      "/imagenes/repuestos/gol-guardabarros.jpg",
  },


  // ========================================
  // CHEVROLET CLASSIC
  // ========================================

  {
    id: 7,
    autoId: 4,

    nombre: "Guardabarros Chevrolet Classic",

    categoria: "Guardabarros",

    marca: "Chevrolet",

    modelo: "Classic",

    imagen:
      "/imagenes/repuestos/gol-guardabarros.jpg",
  },


  // ========================================
  // VOLKSWAGEN GOL
  // ========================================

  {
    id: 8,
    autoId: 5,

    nombre: "Guardabarros Volkswagen Gol",

    categoria: "Guardabarros",

    marca: "Volkswagen",

    modelo: "Gol",

    imagen:
      "/imagenes/repuestos/gol-guardabarros.jpg",
  },


  // ========================================
  // VOLKSWAGEN FOX
  // ========================================

  {
    id: 9,
    autoId: 6,

    nombre: "Guardabarros Volkswagen Fox",

    categoria: "Guardabarros",

    marca: "Volkswagen",

    modelo: "Fox",

    imagen:
      "/imagenes/repuestos/gol-guardabarros.jpg",
  },


  // ========================================
  // PEUGEOT 206
  // ========================================

  {
    id: 10,
    autoId: 7,

    nombre: "Guardabarros Peugeot 206",

    categoria: "Guardabarros",

    marca: "Peugeot",

    modelo: "206",

    imagen:
      "/imagenes/repuestos/gol-guardabarros.jpg",
  },
  {
    id: 10,
    autoId: 10,

    nombre: "Guardabarros Ford",

    categoria: "Guardabarros",

    marca: "Ford",

    modelo: "Fiesta",

    imagen:
      "/imagenes/repuestos/gol-guardabarros.jpg",
  },

];

export default productos;