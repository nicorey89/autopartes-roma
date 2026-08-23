// ========================================
// TARJETA DE MARCA
// ========================================
//
// Esta tarjeta representa una marca.
// Al hacer click se muestran los vehículos
// correspondientes a esa marca.

function MarcaCard({ marca, onSeleccionar }) {

  return (

    <article
      className="marca-card"
      onClick={() => onSeleccionar(marca)}
    >

      {/* Imagen de la marca */}

      <div className="marca-imagen">

        <img
          src={marca.imagen}
          alt={marca.nombre}
        />

      </div>


      {/* Nombre */}

      <div className="marca-info">

        <h3>
          {marca.nombre}
        </h3>

        <p>
          Ver vehículos
        </p>

      </div>

    </article>
  );
}

export default MarcaCard;