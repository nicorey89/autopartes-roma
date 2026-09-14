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
    autoId: 2,

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

    nombre: "Óptica FN AN Fiat Palio Fase 2",

    categoria: "Ópticas",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/opt-FN-AN.jpg",
  },

  {
    id: 4,
    autoId: 1,

    nombre: "Óptica FN AC Fiat Palio Fase 2",

    categoria: "Ópticas",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/opt-FN-AC.jpg",
  },

  {
    id: 5,
    autoId: 1,

    nombre: "Óptica FC AC Fiat Palio Fase 2",

    categoria: "Ópticas",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/opt-FC-AC.jpg",
  },
  {
    id: 6,
    autoId: 1,

    nombre: "Óptica FC AN Fiat Palio Fase 2",

    categoria: "Ópticas",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/opt-FC-AN.jpg",
  },

  // ========================================
  // FIAT SIENA
  // ========================================
  // ========================================
  // CHEVROLET CORSA
  // ========================================

  {
    id: 7,
    autoId: 3,

    nombre: "Guardabarros Chevrolet Corsa",

    categoria: "Guardabarros",

    marca: "Chevrolet",

    modelo: "Corsa",

    imagen:
      "/imagenes/repuestos/gol-guardabarros.jpg",
  },

  {
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
    autoId: 7,

    nombre: "Guardabarros Izquierdo Peugeot 207",

    categoria: "Guardabarros",

    marca: "Peugeot",

    modelo: "207",

    imagen:
      "/imagenes/repuestos/PEUGEOT-207/GDI207.jpg",
  },
  {
    id: 13,
    autoId: 7,

    nombre: "Guardabarros Derecho Peugeot 207",

    categoria: "Guardabarros",

    marca: "Peugeot",

    modelo: "207",

    imagen:
      "/imagenes/repuestos/PEUGEOT-207/GDD207.jpg",
  },
  {
    id: 14,
    autoId: 7,

    nombre: "Paragolpes P/Faro Aux Peugeot 207",

    categoria: "Paragolpes",

    marca: "Peugeot",

    modelo: "207",

    imagen:
      "/imagenes/repuestos/PEUGEOT-207/PD207CAA.jpg",
  },

];

export default productos;