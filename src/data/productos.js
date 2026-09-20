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
  // FIAT PALIO F2
  // ========================================

  {
    id: 1,
    autoId: 3,

    nombre: "Guardabarros Derecho Fiat Palio Fase 2",

    categoria: "Guardabarros",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/GDD-palio-f2.jpg",
  },

  {
    id: 2,
    autoId: 3,

    nombre: "Guardabarros Izquierdo Fiat Palio Fase 2",

    categoria: "Guardabarros",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/GDI-palio-f2.jpg",
  },

  {
    id: 3,
    autoId: 3,

    nombre: "Óptica FN AN Fiat Palio Fase 2",

    categoria: "Ópticas",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/opt-FN-AN.jpg",
  },

  {
    id: 4,
    autoId: 3,

    nombre: "Óptica FN AC Fiat Palio Fase 2",

    categoria: "Ópticas",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/opt-FN-AC.jpg",
  },

  {
    id: 5,
    autoId: 3,

    nombre: "Óptica FC AC Fiat Palio Fase 2",

    categoria: "Ópticas",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/opt-FC-AC.jpg",
  },
  {
    id: 6,
    autoId: 3,

    nombre: "Óptica FC AN Fiat Palio Fase 2",

    categoria: "Ópticas",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/opt-FC-AN.jpg",
  },
  {
    id: 7,
    autoId: 3,

    nombre: "Capot Fiat Palio Fase 2",

    categoria: "Capot",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/capot-palio-f2.jpg",
  },
  {
    id: 8,
    autoId: 3,

    nombre: "Espejos Fiat Palio Fase 2",

    categoria: "Espejos",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/espejo-palio-f2.jpg",
  },
  {
    id: 9,
    autoId: 3,

    nombre: "Faro Trasero Ambar Fiat Palio Fase 2",

    categoria: "Faros Traseros",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/faro-tras-ambar-palio-f2.jpg",
  },
  {
    id: 10,
    autoId: 3,

    nombre: "Faro Trasero Blanco Fiat Palio Fase 2",

    categoria: "Faros Traseros",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/faro-tras-blanco-palio-f2.jpg",
  },
  {
    id: 11,
    autoId: 3,

    nombre: "Faro Trasero Fume Fiat Palio Fase 2",

    categoria: "Faros Traseros",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/faro-tras-fume-palio-f2.jpg",
  },
  {
    id: 12,
    autoId: 3,

    nombre: "Ojo De Gato Trasero Fiat Palio Fase 2",

    categoria: "Ojo de Gato",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/ojo-gato-tras-palio-f2.jpg",
  },
  {
    id: 13,
    autoId: 3,

    nombre: "Paragolpe Delantero Fiat Palio Fase 2",

    categoria: "Paragolpes",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/parag-del-palio-f2.jpg",
  },
  {
    id: 14,
    autoId: 3,

    nombre: "Paragolpe Trasero Fiat Palio Fase 2",

    categoria: "Paragolpes",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/parag-tras-palio-f2.jpg",
  },
  {
    id: 15,
    autoId: 3,

    nombre: "Parrilla Delantera Fiat Palio Fase 2",

    categoria: "Parrillas",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/parrilla-del-palio-f2.jpg",
  },
  {
    id: 16,
    autoId: 3,

    nombre: "Rejillas Inf Ciega Nafta Fiat Palio Fase 2",

    categoria: "Rejillas",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/rejilla-ciega-palio-f2-viejo.jpg",
  },
  {
    id: 17,
    autoId: 3,

    nombre: "Rejilla Inf P/Aux Nafta Fiat Palio Fase 2",

    categoria: "Rejillas",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/rejilla-lat-p-aux-parag-del-palio-f2.jpg",
  },
  {
    id: 18,
    autoId: 3,

    nombre: "Rejilla Inf Ciega Diesel Fiat Palio Fase 2",

    categoria: "Rejillas",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/rejilla-ciega-palio-f2-viejo-diesel.jpg",
  },
  {
    id: 19,
    autoId: 3,

    nombre: "Rejilla Inf P/Aux Diesel Fiat Palio Fase 2",

    categoria: "Rejillas",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/rejilla-p-aux-palio-f2-viejo-diesel.jpg",
  },
  {
    id: 20,
    autoId: 3,

    nombre: "Rejilla Inf Ciega Modelo Nuevo Fiat Palio Fase 2",

    categoria: "Rejillas",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/rejilla-sin-aux-palio-f2-viejo.jpg",
  },
  {
    id: 21,
    autoId: 3,

    nombre: "Rejilla Inf P/Aux Modelo Nuevo Fiat Palio Fase 2",

    categoria: "Rejillas",

    marca: "Fiat",

    modelo: "Palio Fase 2",

    imagen:
      "/imagenes/repuestos/palio-f2/rejilla-para-aux-palio-f2-nuevo.jpg",
  },

  // ========================================
  // FIAT SIENA
  // ========================================
  // ========================================
  // CHEVROLET CORSA
  // ========================================

  {
    id: 22,
    autoId: 7,

    nombre: "Guardabarros Chevrolet Corsa",

    categoria: "Guardabarros",

    marca: "Chevrolet",

    modelo: "Corsa",

    imagen:
      "/imagenes/repuestos/gol-guardabarros.jpg",
  },

  {
    id: 23,
    autoId: 7,

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
    id: 24,
    autoId: 8,

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
    id: 25,
    autoId: 11,

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
    id: 26,
    autoId: 11,

    nombre: "Guardabarros Volkswagen Gol G3",

    categoria: "Guardabarros",

    marca: "Volkswagen",

    modelo: "Gol",

    imagen:
      "/imagenes/repuestos/gol-guardabarros.jpg",
  },


  // ========================================
  // PEUGEOT 206
  // ========================================

  {
    id: 27,
    autoId: 17,

    nombre: "Guardabarros Izquierdo Peugeot 207",

    categoria: "Guardabarros",

    marca: "Peugeot",

    modelo: "207",

    imagen:
      "/imagenes/repuestos/PEUGEOT-207/GDI207.jpg",
  },
  {
    id: 28,
    autoId: 17,

    nombre: "Guardabarros Derecho Peugeot 207",

    categoria: "Guardabarros",

    marca: "Peugeot",

    modelo: "207",

    imagen:
      "/imagenes/repuestos/PEUGEOT-207/GDD207.jpg",
  },
  {
    id: 29,
    autoId: 17,

    nombre: "Paragolpes P/Faro Aux Peugeot 207",

    categoria: "Paragolpes",

    marca: "Peugeot",

    modelo: "207",

    imagen:
      "/imagenes/repuestos/PEUGEOT-207/PD207CAA.jpg",
  },

];

export default productos;