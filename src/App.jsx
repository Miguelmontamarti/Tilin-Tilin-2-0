import React, { useState } from 'react'; // 1. Importa useState
import './App.css';

function App() {
  // 2. Define los valores de la IP y el puerto para no repetirlos
  const serverIp = 'Miguelmontamarti.aternos.me';
  const serverPort = '41094';

  // 3. Crea estados para el texto de cada botón
  const [ipButtonText, setIpButtonText] = useState('Copiar IP');
  const [portButtonText, setPortButtonText] = useState('Copiar Puerto');

  // 4. Función para copiar la IP
  const handleCopyIp = () => {
    navigator.clipboard.writeText(serverIp).then(() => {
      // Si se copia con éxito
      setIpButtonText('¡Copiado!');
      // Vuelve al texto original después de 2 segundos
      setTimeout(() => {
        setIpButtonText('Copiar IP');
      }, 2000);
    }).catch(err => {
      // Manejo de errores por si no se puede copiar
      console.error('Error al copiar la IP: ', err);
    });
  };

  // 5. Función para copiar el Puerto
  const handleCopyPort = () => {
    navigator.clipboard.writeText(serverPort).then(() => {
      // Si se copia con éxito
      setPortButtonText('¡Copiado!');
      // Vuelve al texto original después de 2 segundos
      setTimeout(() => {
        setPortButtonText('Copiar Puerto');
      }, 2000);
    }).catch(err => {
      // Manejo de errores
      console.error('Error al copiar el puerto: ', err);
    });
  };

  return (
    <div className="app-container">
      <header className="main-header">
        <h1>El servidor definitivo para constructores y aventureros.</h1>
      </header>

      <main className="main-content">
        <section className="join-section">
          <h2>ÚNETE AHORA</h2>
          
          <p className="aternos-notice">
            (Servidor en Aternos: asegúrate de que esté encendido para unirte)
          </p>

          {/* --- SECCIÓN MODIFICADA --- */}
          <div className="ip-container">
            {/* Contenedor para la IP */}
            <div className="address-item">
              <div className="ip-address">{serverIp}</div>
              <button className="copy-button" onClick={handleCopyIp}>
                {ipButtonText}
              </button>
            </div>
            
            {/* Contenedor para el Puerto */}
            <div className="address-item">
              <div className="ip-address port-number">{serverPort}</div>
              <button className="copy-button port-button" onClick={handleCopyPort}>
                {portButtonText}
              </button>
            </div>
          </div>
          {/* --- FIN DE LA SECCIÓN MODIFICADA --- */}

        </section>

        <section className="gamemodes-section">
          <h3>Modalidades de Juego</h3>
          <div className="gamemodes-grid">
            
            <div className="mode-card">
              <h4 className="survival-title">Survival</h4>
              <p>
                Sobrevive, construye tu base y explora un mundo lleno de peligros y secretos.
              </p>
            </div>
            
            <div className="mode-card">
              <h4 className="creative-title">Creativo</h4>
              <p>
                Libera tu imaginación con recursos ilimitados y protege tus creaciones.
              </p>
            </div>

            <div className="mode-card">
              <h4 className="minigames-title">Minijuegos</h4>
              <p>
                Compite contra otros en SkyWars, BedWars y eventos únicos cada semana.
              </p>
            </div>

          </div>
        </section>
      </main>

      <footer className="main-footer">
        <p>Tilin Tilin 2.0 © 2024 - Todos los derechos reservados.</p>
      </footer>
      
      <div className="floating-icon">
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
      </div>
    </div>
  );
}

export default App;