'use client';

import { useState, useEffect } from 'react';
import './globals.css';

export default function FNAFVideo() {
  const [scene, setScene] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const [showJumpscare, setShowJumpscare] = useState(false);

  useEffect(() => {
    const sceneTimer = setInterval(() => {
      setScene(prev => (prev + 1) % 4);
    }, 4000);

    const glitchTimer = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000 + Math.random() * 2000);

    return () => {
      clearInterval(sceneTimer);
      clearInterval(glitchTimer);
    };
  }, []);

  const triggerJumpscare = () => {
    setShowJumpscare(true);
    setTimeout(() => setShowJumpscare(false), 1000);
  };

  const scenes = [
    {
      title: "BEM-VINDO À FREDDY FAZBEAR'S PIZZA",
      subtitle: "Noite 1 - 00:00",
      content: "Seu turno começa agora...",
      color: "#4a0e0e"
    },
    {
      title: "CÂMERA: PALCO PRINCIPAL",
      subtitle: "Freddy, Bonnie e Chica estão no palco",
      content: "Tudo parece normal... por enquanto.",
      color: "#1a1a2e"
    },
    {
      title: "AVISO DO SISTEMA",
      subtitle: "Energia restante: 45%",
      content: "Algo está se movendo nos corredores...",
      color: "#0f3460"
    },
    {
      title: "6 AM",
      subtitle: "Você sobreviveu!",
      content: "Mas será que vai sobreviver à próxima noite?",
      color: "#533483"
    }
  ];

  const currentScene = scenes[scene];

  return (
    <div className="fnaf-container" style={{ backgroundColor: currentScene.color }}>
      {/* Efeito de câmera de segurança */}
      <div className={`security-overlay ${glitch ? 'glitch' : ''}`}>
        <div className="scanlines"></div>
        <div className="vignette"></div>
      </div>

      {/* Jumpscare */}
      {showJumpscare && (
        <div className="jumpscare">
          <div className="jumpscare-face">
            <div className="eyes">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
            <div className="mouth"></div>
          </div>
          <div className="jumpscare-text">AAAAAHHH!!!</div>
        </div>
      )}

      {/* Conteúdo principal */}
      <div className="content">
        {/* Indicador de câmera */}
        <div className="camera-hud">
          <div className="camera-number">CAM {(scene % 6) + 1}</div>
          <div className="timestamp">
            {new Date().toLocaleTimeString('pt-BR')}
          </div>
        </div>

        {/* Título da cena */}
        <h1 className={`title ${glitch ? 'glitch-text' : ''}`}>
          {currentScene.title}
        </h1>

        {/* Subtítulo */}
        <div className="subtitle">{currentScene.subtitle}</div>

        {/* Animações de personagens */}
        <div className="stage">
          <div className={`animatronic freddy ${scene === 1 ? 'visible' : ''}`}>
            <div className="character-body">
              <div className="hat"></div>
              <div className="head">
                <div className="ears">
                  <div className="ear"></div>
                  <div className="ear"></div>
                </div>
                <div className="eyes-container">
                  <div className="char-eye"></div>
                  <div className="char-eye"></div>
                </div>
              </div>
            </div>
            <div className="character-name">FREDDY</div>
          </div>

          <div className={`animatronic bonnie ${scene === 1 ? 'visible' : ''}`}>
            <div className="character-body bonnie-color">
              <div className="head">
                <div className="bunny-ears">
                  <div className="bunny-ear"></div>
                  <div className="bunny-ear"></div>
                </div>
                <div className="eyes-container">
                  <div className="char-eye"></div>
                  <div className="char-eye"></div>
                </div>
              </div>
            </div>
            <div className="character-name">BONNIE</div>
          </div>

          <div className={`animatronic chica ${scene === 1 ? 'visible' : ''}`}>
            <div className="character-body chica-color">
              <div className="head">
                <div className="beak"></div>
                <div className="eyes-container">
                  <div className="char-eye"></div>
                  <div className="char-eye"></div>
                </div>
              </div>
            </div>
            <div className="character-name">CHICA</div>
          </div>
        </div>

        {/* Texto da cena */}
        <p className="scene-text">{currentScene.content}</p>

        {/* Barra de energia */}
        <div className="power-bar">
          <div className="power-label">ENERGIA:</div>
          <div className="power-fill" style={{ width: `${100 - (scene * 15)}%` }}>
            <div className="power-text">{100 - (scene * 15)}%</div>
          </div>
        </div>

        {/* Botão de jumpscare */}
        <button className="scare-button" onClick={triggerJumpscare}>
          ⚠️ CLICAR POR SUA CONTA E RISCO
        </button>

        {/* Easter egg: indicador de movimento */}
        <div className="motion-indicators">
          <div className={`motion-dot ${scene === 2 ? 'active' : ''}`}></div>
          <div className={`motion-dot ${scene === 2 ? 'active' : ''}`}></div>
          <div className={`motion-dot ${scene === 2 ? 'active' : ''}`}></div>
        </div>
      </div>

      {/* Texto rodapé */}
      <div className="footer">
        <p>🐻 Five Nights at Freddy's - Experiência Interativa 🐻</p>
        <p className="warning">⚠️ Não recomendado para menores de 12 anos</p>
      </div>
    </div>
  );
}
