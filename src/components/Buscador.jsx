// ========================================
// BUSCADOR
// ========================================
//
// Este componente recibe:
// - texto: lo que escribió el usuario
// - setTexto: función para modificar el texto

function Buscador({ texto, setTexto }) {

  return (

    <div className="buscador">

      <input
        type="text"
        placeholder="Buscar vehículo..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

    </div>

  );
}

export default Buscador;