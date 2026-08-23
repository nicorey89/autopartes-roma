// ========================================
// TARJETA DE PRODUCTO
// ========================================

function Producto({ producto }) {

  // Número de WhatsApp
  //
  // REEMPLAZAR por el número real.
  //
  // Ejemplo:
  // 5491123456789

  const numeroWhatsApp =
    "5491100000000";


  // Mensaje de WhatsApp

  const mensaje =
    `Hola, quiero consultar por ${producto.nombre}`;


  // Enlace de WhatsApp

  const enlaceWhatsApp =
    `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensaje
    )}`;


  return (

    <article className="producto">

      {/* Imagen */}

      <div className="producto-imagen">

        <img
          src={producto.imagen}
          alt={producto.nombre}
        />

      </div>


      {/* Información */}

      <div className="producto-info">

        <span className="producto-categoria">

          {producto.categoria}

        </span>


        <h3>
          {producto.nombre}
        </h3>


        <p>
          {producto.marca} {producto.modelo}
        </p>


        {/* WhatsApp */}

        <a
          href={enlaceWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-whatsapp"
        >
          Consultar por WhatsApp
        </a>

      </div>

    </article>
  );
}

export default Producto;