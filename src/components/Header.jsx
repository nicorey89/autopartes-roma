function Header() {
  return (
    <header className="header">

      {/* Nombre del negocio */}
      <div className="logo">
        <img
          src="/imagenes/logo/AR.png"
          alt="Autopartes Roma"
        />
      </div>

      {/* Menú principal */}
      <nav className="menu">

        <a href="#inicio">
          Inicio
        </a>

        <a href="#repuestos">
          Repuestos
        </a>

        <a href="#contacto">
          Contacto
        </a>

      </nav>

    </header>
  );
}

export default Header;