import Header from "./components/Header";
import GaleriaAutos from "./components/GaleriaAutos";
import GaleriaProductos from "./components/GaleriaProductos";

import autos from "./data/autos";
import productos from "./data/productos";
import Buscador from "./components/Buscador";

import { useState } from "react";

function App() {

  // ========================================
  // VEHÍCULO SELECCIONADO
  // ========================================

  const [autoSeleccionado, setAutoSeleccionado] = useState(null);

// ========================================
// TEXTO DEL BUSCADOR
// ========================================

const [textoBusqueda, setTextoBusqueda] = useState("");
  // ========================================
  // SELECCIONAR VEHÍCULO
  // ========================================

  const seleccionarAuto = (auto) => {

    setAutoSeleccionado(auto);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  // ========================================
  // VOLVER A LA PÁGINA PRINCIPAL
  // ========================================

  const volverAutos = () => {

    setAutoSeleccionado(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

// ========================================
// FILTRAR VEHÍCULOS
// ========================================

const autosFiltrados = autos.filter((auto) => {

  const texto = textoBusqueda.toLowerCase();

  return (
    auto.nombre.toLowerCase().includes(texto) ||
    auto.marca.toLowerCase().includes(texto) ||
    auto.modelo.toLowerCase().includes(texto)
  );

});
  // ========================================
  // OBTENER LOS REPUESTOS DEL VEHÍCULO
  // ========================================

  const productosDelAuto = autoSeleccionado
    ? productos.filter(
        (producto) =>
          producto.autoId === autoSeleccionado.id
      )
    : [];


  return (

    <div className="app">

      {/* ====================================
          HEADER
          ==================================== */}

      <Header />


      {/* ====================================
          PÁGINA PRINCIPAL
          ==================================== */}

      {!autoSeleccionado && (

        <main>

          {/* ==================================
              PRESENTACIÓN DEL LOGO
              ================================== */}

          <section className="presentacion">

          {/* Logo principal */}

            <img
              src="/imagenes/logo/AR.png"
              alt="Autopartes Roma"
              className="logo-principal"
            />


          {/* Título */}

            <h1>
              Catálogo de Autopartes
            </h1>


          {/* Descripción */}

            <p>
              Seleccioná tu vehículo para ver
              los repuestos disponibles.
            </p>


          {/* ==================================
            BUSCADOR
          ================================== */}

            <Buscador
              texto={textoBusqueda}
              setTexto={setTextoBusqueda}
            />

          </section>


          {/* ==================================
              VEHÍCULOS
              ================================== */}

          <section>

            <h2 className="titulo-seccion">
              Seleccioná tu vehículo
            </h2>

            <GaleriaAutos
              autos={autosFiltrados}
              onSeleccionar={seleccionarAuto}
            />

          </section>

        </main>

      )}


      {/* ====================================
          DETALLE DEL VEHÍCULO
          ==================================== */}

      {autoSeleccionado && (

        <main>

          {/* Botón volver */}

          <button
            className="boton-volver"
            onClick={volverAutos}
          >
            ← Volver a vehículos
          </button>


          {/* ==================================
              PRESENTACIÓN DEL VEHÍCULO
              ================================== */}

          <section className="vehiculo-detalle">

            <img
              src={autoSeleccionado.imagen}
              alt={autoSeleccionado.nombre}
              className="vehiculo-detalle-imagen"
            />

            <h1>
              {autoSeleccionado.nombre}
            </h1>

            <p>
              Repuestos disponibles para este vehículo
            </p>

          </section>


          {/* ==================================
              REPUESTOS
              ================================== */}

          <GaleriaProductos
            productos={productosDelAuto}
          />

        </main>

      )}


      {/* ====================================
          FOOTER
          ==================================== */}

      <footer>

        <h3>
          AUTOPARTES ROMA
        </h3>

        <p>
          Repuestos y accesorios para vehículos.
        </p>

      </footer>

    </div>
  );
}

export default App;