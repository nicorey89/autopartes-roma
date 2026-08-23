// ========================================
// TARJETA DE VEHÍCULO
// ========================================
//
// Esta tarjeta representa un vehículo.
// Al hacer click, llamamos a la función
// que nos permite mostrar sus repuestos.

function AutoCard({ auto, onSeleccionar }) {

  return (
    <article
      className="auto-card"
      onClick={() => onSeleccionar(auto)}
    >

      {/* Imagen del vehículo */}

      <div className="auto-imagen">

        <img
          src={auto.imagen}
          alt={auto.nombre}
        />

      </div>


      {/* Información del vehículo */}

      <div className="auto-info">

        <h3>
          {auto.nombre}
        </h3>

        <p>
          Ver repuestos
        </p>

      </div>

    </article>
  );
}

export default AutoCard;