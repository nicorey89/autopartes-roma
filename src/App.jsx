import { useEffect, useState } from "react";

// ========================================
// COMPONENTES
// ========================================

import Header from "./components/Header";
import Intro from "./components/Intro";
import Buscador from "./components/Buscador";
import GaleriaMarcas from "./components/GaleriaMarcas";
import GaleriaAutos from "./components/GaleriaAutos";
import GaleriaProductos from "./components/GaleriaProductos";
import Contacto from "./components/Contacto";

// ========================================
// DATOS
// ========================================

import marcas from "./data/marcas";
import autos from "./data/autos";
import productos from "./data/productos";


function App() {

  // ========================================
  // INTRODUCCIÓN
  // ========================================

  const [mostrarIntro, setMostrarIntro] = useState(true);


  // ========================================
  // MARCA SELECCIONADA
  // ========================================

  const [marcaSeleccionada, setMarcaSeleccionada] =
    useState(null);


  // ========================================
  // VEHÍCULO SELECCIONADO
  // ========================================

  const [autoSeleccionado, setAutoSeleccionado] =
    useState(null);


  // ========================================
  // BUSCADOR
  // ========================================

  const [textoBusqueda, setTextoBusqueda] =
    useState("");


  // ========================================
  // OCULTAR INTRO
  // ========================================
  //
  // La intro dura 2 segundos.
  //

  useEffect(() => {

    const temporizador = setTimeout(() => {

      setMostrarIntro(false);

    }, 2000);


    return () => clearTimeout(temporizador);

  }, []);


  // ========================================
  // NORMALIZAR TEXTO
  // ========================================
  //
  // Permite buscar sin importar:
  //
  // Mayúsculas
  // Minúsculas
  // Acentos
  //
  // Ejemplo:
  //
  // "Óptica"
  // "optica"
  // "OPTICA"
  //
  // funcionan igual.
  //

  const normalizarTexto = (texto) => {

    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  };


  // ========================================
  // BUSCADOR GLOBAL
  // ========================================
  //
  // Busca dentro de:
  //
  // - Nombre del repuesto
  // - Categoría
  // - Marca
  // - Modelo
  // - Vehículo
  //

  const productosBuscados = productos.filter(
    (producto) => {

      // Si no hay texto,
      // no mostramos resultados.

      if (!textoBusqueda.trim()) {

        return false;

      }


      // Convertimos la búsqueda

      const busqueda =
        normalizarTexto(textoBusqueda);


      // Buscamos el vehículo correspondiente

      const auto = autos.find(
        (auto) =>
          auto.id === producto.autoId
      );


      // Unimos toda la información
      // del producto.

      const textoProducto =
        normalizarTexto(

          `${producto.nombre || ""}
          ${producto.categoria || ""}
          ${producto.marca || ""}
          ${producto.modelo || ""}
          ${auto?.nombre || ""}
          ${auto?.marca || ""}
          ${auto?.modelo || ""}`

        );


      // Separamos la búsqueda
      // en palabras.

      const palabras =
        busqueda.split(/\s+/);


      // Todas las palabras deben
      // encontrarse.

      return palabras.every(
        (palabra) =>
          textoProducto.includes(palabra)
      );

    }
  );


  // ========================================
  // VEHÍCULOS DE LA MARCA
  // ========================================

  const autosDeLaMarca = marcaSeleccionada

    ? autos.filter(
        (auto) =>
          auto.marcaId === marcaSeleccionada.id
      )

    : [];


  // ========================================
  // REPUESTOS DEL VEHÍCULO
  // ========================================

  const productosDelAuto = autoSeleccionado

    ? productos.filter(
        (producto) =>
          producto.autoId === autoSeleccionado.id
      )

    : [];


  // ========================================
  // SELECCIONAR MARCA
  // ========================================

  const seleccionarMarca = (marca) => {

    setMarcaSeleccionada(marca);

    setAutoSeleccionado(null);

    setTextoBusqueda("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


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
  // VOLVER A MARCAS
  // ========================================

  const volverMarcas = () => {

    setMarcaSeleccionada(null);

    setAutoSeleccionado(null);

    setTextoBusqueda("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  // ========================================
  // VOLVER A VEHÍCULOS
  // ========================================

  const volverVehiculos = () => {

    setAutoSeleccionado(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  // ========================================
  // IR AL INICIO
  // ========================================

  const irAlInicio = () => {

    setMarcaSeleccionada(null);

    setAutoSeleccionado(null);

    setTextoBusqueda("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  // ========================================
  // RENDER
  // ========================================

  return (

    <>

      {/* ==================================
          INTRO
          ================================== */}

      {mostrarIntro && <Intro />}


      {/* ==================================
          APLICACIÓN
          ================================== */}

      <div className="app">


        {/* ==================================
            HEADER
            ================================== */}

        <Header />


        {/* ==================================
            HOME
            ================================== */}

        {!marcaSeleccionada &&
         !autoSeleccionado && (

          <main>


            {/* ==============================
                PRESENTACIÓN
                ============================== */}

            <section className="presentacion">

              <img
                src="/imagenes/logo/AR.png"
                alt="Autopartes Roma"
                className="logo-principal"
              />


              <h1>
                Catálogo de Autopartes
              </h1>


              <p>
                Buscá un repuesto o seleccioná
                la marca de tu vehículo.
              </p>


              {/* ============================
                  BUSCADOR
                  ============================ */}

              <Buscador
                texto={textoBusqueda}
                setTexto={setTextoBusqueda}
              />

            </section>


            {/* ==============================
                RESULTADOS DE BÚSQUEDA
                ============================== */}

            {textoBusqueda.trim() && (

              <section className="resultados-busqueda">

                <h2>
                  Resultados de búsqueda
                </h2>


                {productosBuscados.length > 0 ? (

                  <GaleriaProductos
                    productos={productosBuscados}
                  />

                ) : (

                  <p className="sin-resultados producto-info a">

                    No encontramos repuestos
                    para "{textoBusqueda}".
                    <a
                    href="https://wa.me/5491158079181?text=Hola%20Autopartes%20Roma%2C%20quiero%20consultar%20por%20un%20repuesto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="boton-whatsapp"
                    >
                    Consultar por WhatsApp
                    </a>

                  </p>

                )}

              </section>

            )}


            {/* ==============================
                MARCAS
                ============================== */}

            {!textoBusqueda.trim() && (

              <section
                id="marcas"
                className="seccion-marcas"
              >

                <h2 className="titulo-seccion">
                  Seleccioná una marca
                </h2>


                <GaleriaMarcas
                  marcas={marcas}
                  onSeleccionar={seleccionarMarca}
                />

              </section>

            )}


            {/* ==============================
                CONTACTO
                ============================== */}
            {/*
              IMPORTANTE:
              Contacto está FUERA del bloque
              de marcas.

              De esta manera siempre aparece
              al final del Home.
            */}

            <Contacto />


          </main>

        )}


        {/* ==================================
            VEHÍCULOS DE LA MARCA
            ================================== */}

        {marcaSeleccionada &&
         !autoSeleccionado && (

          <main className="pagina-vehiculos">


            {/* ==============================
                VOLVER
                ============================== */}

            <button
              className="boton-volver"
              onClick={volverMarcas}
            >

              ← Volver a marcas

            </button>


            {/* ==============================
                TÍTULO
                ============================== */}

            <section className="hero">

              <h1>
                {marcaSeleccionada.nombre}
              </h1>

              <p>
                Seleccioná el vehículo
              </p>

            </section>


            {/* ==============================
                VEHÍCULOS
                ============================== */}

            <GaleriaAutos
              autos={autosDeLaMarca}
              onSeleccionar={seleccionarAuto}
            />


          </main>

        )}


        {/* ==================================
            DETALLE DEL VEHÍCULO
            ================================== */}

        {autoSeleccionado && (

          <main className="pagina-detalle">


            {/* ==============================
                VOLVER
                ============================== */}

            <button
              className="boton-volver"
              onClick={volverVehiculos}
            >

              ← Volver a vehículos

            </button>


            {/* ==============================
                INFORMACIÓN DEL VEHÍCULO
                ============================== */}

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


            {/* ==============================
                REPUESTOS
                ============================== */}

            {productosDelAuto.length > 0 ? (

              <GaleriaProductos
                productos={productosDelAuto}
              />

            ) : (

              <p className="sin-resultados producto-info a">

                No hay repuestos cargados
                para este vehículo.

                <a
                href="https://wa.me/5491158079181?text=Hola%20Autopartes%20Roma%2C%20quiero%20consultar%20por%20un%20repuesto."
                target="_blank"
                rel="noopener noreferrer"
                className="boton-whatsapp"
                >
                Consultar por WhatsApp
                </a>
              </p>

            )}


          </main>

        )}

        {/* ========================================
        BOTÓN FLOTANTE WHATSAPP
        ======================================== */}

        <a
          href="https://wa.me/5491158079181?text=Hola%20Autopartes%20Roma%2C%20quiero%20consultar%20por%20un%20repuesto."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-flotante"
          aria-label="Contactar por WhatsApp"
        >
          <span>WhatsApp</span>
        </a>
        {/* ==================================
            FOOTER
            ================================== */}

        <footer className="footer">

          <div className="footer-contenido">

            <img
              src="/imagenes/logo/AR.png"
              alt="Autopartes Roma"
              className="footer-logo"
            />

            <h3>
              AUTOPARTES ROMA
            </h3>

            <p>
              Repuestos y accesorios para vehículos.
            </p>

            <p className="copyright">
              © {new Date().getFullYear()} Autopartes Roma.
              Todos los derechos reservados.
            </p>

          </div>

        </footer>


      </div>

    </>

  );

}

export default App;