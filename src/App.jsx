import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1>El servidor definitivo para constructores y aventureros.</h1>
      </header>

      <main className="main-content">
        <section className="join-section">
          <h2>ÚNETE AHORA</h2>
          <div className="ip-container">
            <div className="ip-address">play.tilintilin.gg</div>
            <button className="copy-ip-button">Copiar IP</button>
          </div>
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
      
      {/* Icono flotante simulado */}
      <div className="floating-icon">
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
      </div>
    </div>
  );
}

export default App;