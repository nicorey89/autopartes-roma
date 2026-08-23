// ========================================
// BUSCADOR GLOBAL
// ========================================
//
// Busca tanto vehículos como repuestos.
//
// Ejemplos:
//
// "Palio"
// "Fiat"
// "Guardabarros"
// "Guardabarros Fiat"
// "Óptica Corsa"
// "Gol Guardabarros"

function Buscador({ texto, setTexto }) {

  return (

    <div className="buscador">

      <input
        type="text"
        placeholder="Buscar repuesto, marca o vehículo..."
        value={texto}
        onChange={(e) =>
          setTexto(e.target.value)
        }
      />

    </div>

  );
}

export default Buscador;