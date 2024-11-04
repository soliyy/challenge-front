// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header style={{
      backgroundColor: '#004B8D',
      padding: '10px 20px',
      color: '#FFFFFF',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ fontSize: '24px', margin: 0 }}>Porto Seguro</h1>
      <nav>
        <Link href="/" legacyBehavior>
          <a style={{
            margin: '0 15px',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontSize: '16px'
          }}>Home</a>
        </Link>
        <Link href="/enderecos" legacyBehavior>
          <a style={{
            margin: '0 15px',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontSize: '16px'
          }}>Lista de Endereços</a>
        </Link>
        <Link href="/sobre" legacyBehavior>
          <a style={{
            margin: '0 15px',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontSize: '16px'
          }}>Sobre</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
