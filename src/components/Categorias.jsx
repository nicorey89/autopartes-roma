function Categorias({ categoriaSeleccionada, setCategoriaSeleccionada }) {

  const categorias = [
    "Todos",
    "Guardabarros",
    "Ópticas",
    "Faros traseros",
    "Accesorios",
    "Carrocería",
  ];

  return (
    <div className="categorias">

      {categorias.map((categoria) => (

        <button
          key={categoria}
          className={
            categoriaSeleccionada === categoria
              ? "categoria activa"
              : "categoria"
          }
          onClick={() => setCategoriaSeleccionada(categoria)}
        >
          {categoria}
        </button>

      ))}

    </div>
  );
}

export default Categorias;