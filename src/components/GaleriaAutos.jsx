import AutoCard from "./AutoCard";

// ========================================
// GALERÍA DE VEHÍCULOS
// ========================================

function GaleriaAutos({ autos, onSeleccionar }) {

  // Si no encontramos vehículos
  if (autos.length === 0) {

    return (

      <section className="galeria-autos">

        <p className="sin-autos">

          No encontramos ese vehículo.

        </p>

      </section>

    );
  }


  return (

    <section className="galeria-autos">

      {autos.map((auto) => (

        <AutoCard
          key={auto.id}
          auto={auto}
          onSeleccionar={onSeleccionar}
        />

      ))}

    </section>

  );
}

export default GaleriaAutos;