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

        <p className="sin-resultados">
          No hay repuestos disponibles para este vehículo.
        </p>

      )}

    </section>
  );
}

export default GaleriaProductos;