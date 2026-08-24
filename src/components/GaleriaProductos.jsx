import Producto from "./Producto";

// ========================================
// GALERÍA DE REPUESTOS
// ========================================

function GaleriaProductos({ productos }) {

  return (
    <section className="galeria-productos">

      {productos.length > 0 ? (

        productos.map((producto) => (

          <Producto
            key={producto.id}
            producto={producto}
          />

        ))

      ) : (

        <p className="sin-resultados producto-info a">
          No hay repuestos disponibles para este vehículo.
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
  );
}

export default GaleriaProductos;