// ========================================
// HEADER
// ========================================

function Header() {


  // ========================================
  // IR A LA SECCIÓN MARCAS
  // ========================================

    const irAMarcas = () => {

      const marcas = document.getElementById("marcas");

      if (marcas) {

        marcas.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

    };

  // ========================================
  // IR A CONTACTO
  // ========================================


  const irAContacto = () => {

    const contacto =
      document.getElementById("contacto");

    if (contacto) {

      contacto.scrollIntoView({
        behavior: "smooth",
      });

    }

  };


  // ========================================
  // IR AL INICIO
  // ========================================

  const irAlInicio = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  return (

    <header className="header">


      {/* ==================================
          LOGO
          ================================== */}

      <div
        className="header-logo"
        onClick={irAlInicio}
      >

        <img
          src="/imagenes/logo/AR.png"
          alt="Autopartes Roma"
        />

      </div>


      {/* ==================================
          NAVEGACIÓN
          ================================== */}

      <nav className="nav">

        <button
          onClick={irAlInicio}
        >
          Inicio
        </button>


        <button
          onClick={irAMarcas}
        >
          Marcas
        </button>


        <button
          onClick={irAContacto}
        >
          Contacto
        </button>

      </nav>

    </header>

  );
}

export default Header;