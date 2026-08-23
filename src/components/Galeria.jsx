import Producto from "./Producto";

function Galeria({ productos }) {

  return (
    <section className="galeria">

      {productos.length > 0 ? (

        productos.map((producto) => (

          <Producto
            key={producto.id}
            producto={producto}
          />

        ))

      ) : (

        <p className="sin-resultados">
          No encontramos repuestos con esa búsqueda.
        </p>

      )}

    </section>
  );
}

export default Galeria;