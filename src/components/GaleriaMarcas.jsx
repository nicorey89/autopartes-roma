import MarcaCard from "./MarcaCard";

// ========================================
// GALERÍA DE MARCAS
// ========================================

function GaleriaMarcas({ marcas, onSeleccionar }) {

  return (

    <section className="galeria-marcas">

      {marcas.map((marca) => (

        <MarcaCard
          key={marca.id}
          marca={marca}
          onSeleccionar={onSeleccionar}
        />

      ))}

    </section>
  );
}

export default GaleriaMarcas;