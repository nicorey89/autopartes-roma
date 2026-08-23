// ========================================
// PANTALLA DE INTRODUCCIÓN
// ========================================
//
// Esta pantalla aparece solamente cuando
// se carga la página.
//
// Muestra el logo grande sobre fondo negro
// y luego desaparece para mostrar el Home.
//

function Intro() {

  return (

    <div className="intro">

      <img
        src="/imagenes/logo/AR.png"
        alt="Autopartes Roma"
        className="intro-logo"
      />

    </div>

  );
}

export default Intro;