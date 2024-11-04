// src/pages/sobre.tsx
import React from 'react';

const SobrePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#F1F8FE', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
      <h1 style={{ color: '#004B8D' }}>Sobre o Projeto</h1>
      <p style={{ color: '#333', maxWidth: '600px', margin: '20px auto' }}>
        Este projeto foi desenvolvido como parte de um desafio para a criação de uma aplicação que consome dados de uma API
      </p>
    </div>
  );
};

export default SobrePage;
