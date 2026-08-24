import AutoCard from "./AutoCard";

// ========================================
// GALERÍA DE VEHÍCULOS
// ========================================

function GaleriaAutos({ autos, onSeleccionar }) {

  // Si no encontramos vehículos
  if (autos.length === 0) {

    return (

      <section className="galeria-autos">

        <p className="sin-autos producto-info a">

          No encontramos ese vehículo.
                    <a
                    href="https://wa.me/5491158079181?text=Hola%20Autopartes%20Roma%2C%20quiero%20consultar%20por%20un%20repuesto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="boton-whatsapp"
                    >
                    Consultar por WhatsApp
                    </a>
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