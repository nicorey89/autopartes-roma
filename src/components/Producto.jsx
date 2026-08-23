function Producto({ producto }) {

  // Número de WhatsApp del negocio.
  // Más adelante colocaremos el número real.
  const numeroWhatsApp = "5491100000000";

  // Mensaje que se enviará a WhatsApp
  const mensaje = `Hola, quiero consultar por ${producto.nombre}`;

  // Creamos el enlace de WhatsApp
  const enlaceWhatsApp =
    `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

  return (
    <article className="producto">

      {/* Imagen del producto */}
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
          {producto.vehiculo} - {producto.modelo}
        </p>

        {/* Botón de WhatsApp */}
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