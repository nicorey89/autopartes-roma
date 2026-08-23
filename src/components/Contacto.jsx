// ========================================
// SECCIÓN DE CONTACTO
// ========================================

function Contacto() {

  return (

    <section
      id="contacto"
      className="seccion-contacto"
    >

      {/* ==================================
          TÍTULO
          ================================== */}

      <div className="contacto-titulo">

        <h2>
          Contactanos
        </h2>

        <p>
          Estamos para ayudarte a encontrar
          el repuesto que necesitás.
        </p>

      </div>


      {/* ==================================
          CONTENIDO
          ================================== */}

      <div className="contacto-contenido">


        {/* ==================================
            INFORMACIÓN
            ================================== */}

        <div className="contacto-info">

          <div className="contacto-item">

            <span className="contacto-icono">
              📍
            </span>

            <div>

              <h3>
                Nuestra ubicación
              </h3>

              <p>
                Autopartes Roma
              </p>

              <a
                href="https://maps.app.goo.gl/v2FaXBPC8yZDa3sY9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver ubicación en Google Maps
              </a>

            </div>

          </div>


          {/* WhatsApp */}

          <div className="contacto-item">

            <span className="contacto-icono">
              📱
            </span>

            <div>

              <h3>
                WhatsApp
              </h3>

              <p>
                Consultanos por disponibilidad
              </p>

              <a
                href="https://wa.me/5491158079181"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribir por WhatsApp
              </a>

            </div>

          </div>


          {/* Horarios */}

          <div className="contacto-item">

            <span className="contacto-icono">
              🕐
            </span>

            <div>

              <h3>
                Horarios
              </h3>

              <p>
                Lunes a Viernes
              </p>

              <p>
                8:00 a 18:00 hs
              </p>
              <p>
                Sabado
              </p>

              <p>
                8:00 a 13:00 hs
              </p>

            </div>

          </div>

        </div>


        {/* ==================================
            MAPA
            ================================== */}

        <div className="mapa">

          <iframe
            src="https://www.google.com/maps?q=-34.7361111,-58.3788889&z=17&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Autopartes Roma"
          >
          </iframe>

        </div>

      </div>

    </section>

  );
}

export default Contacto;