// ========================================
// LISTA DE REPUESTOS
// ========================================
//
// Cada repuesto tiene un "autoId".
//
// Ese ID nos permite saber a qué vehículo
// pertenece el repuesto.
//
// Ejemplo:
// autoId: 1 → Fiat Palio
// autoId: 2 → Chevrolet Corsa

const productos = [

  // ========================================
  // FIAT PALIO
  // ========================================

  {
    id: 1,
    autoId: 1,
    nombre: "Guardabarros Fiat Palio Fase 2",
    categoria: "Guardabarros",
    modelo: "Fase 2",
    imagen: "/imagenes/repuestos/gol-guardabarros.jpg",
  },

  {
    id: 2,
    autoId: 1,
    nombre: "Guardabarros Fiat Palio Fase 2",
    categoria: "Guardabarros",
    modelo: "Fase 2",
    imagen: "/imagenes/repuestos/gol-guardabarros.jpg",
  },

  {
    id: 3,
    autoId: 1,
    nombre: "Óptica Fiat Palio Fase 2",
    categoria: "Ópticas",
    modelo: "Fase 2",
    imagen: "/imagenes/repuestos/gol-guardabarros.jpg",
  },


  // ========================================
  // CHEVROLET CORSA
  // ========================================

  {
    id: 4,
    autoId: 2,
    nombre: "Guardabarros Chevrolet Corsa",
    categoria: "Guardabarros",
    modelo: "Classic",
    imagen: "/imagenes/repuestos/gol-guardabarros.jpg",
  },

  {
    id: 5,
    autoId: 2,
    nombre: "Óptica Chevrolet Corsa",
    categoria: "Ópticas",
    modelo: "Classic",
    imagen: "/imagenes/repuestos/gol-guardabarros.jpg",
  },


  // ========================================
  // VOLKSWAGEN GOL
  // ========================================

  {
    id: 6,
    autoId: 3,
    nombre: "Guardabarros Volkswagen Gol",
    categoria: "Guardabarros",
    modelo: "Gol",
    imagen: "/imagenes/repuestos/gol-guardabarros.jpg",
  },


  // ========================================
  // PEUGEOT 206
  // ========================================

  {
    id: 7,
    autoId: 4,
    nombre: "Guardabarros Peugeot 206",
    categoria: "Guardabarros",
    modelo: "206",
    imagen: "/imagenes/repuestos/gol-guardabarros.jpg",
  },

];

export default productos;