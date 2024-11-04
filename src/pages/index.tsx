// src/pages/index.tsx
import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#F1F8FE', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
      <h1 style={{ color: '#004B8D' }}>Bem-vindo ao Projeto Challenge</h1>
      <Link href="/enderecos">
        <a style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#004B8D',
          color: '#FFFFFF',
          borderRadius: '4px',
          textDecoration: 'none'
        }}>
          Ver Lista de Endereços
        </a>
      </Link>
    </div>
  );
};

export default HomePage;
