import React, { useEffect, useState } from 'react';
import { getEnderecos, Endereco } from '../services/api';

const ListaEnderecos: React.FC = () => {
  const [enderecos, setEnderecos] = useState<Endereco[]>([]);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const fetchEnderecos = async () => {
      try {
        const dados = await getEnderecos();
        setEnderecos(dados);
      } catch {
        setErro('Erro ao carregar endereços');
      }
    };

    fetchEnderecos();
  }, []);

  return (
    <div style={{ backgroundColor: '#F1F8FE', padding: '20px', borderRadius: '8px' }}>
      <h1 style={{ color: '#004B8D', textAlign: 'center' }}>Lista de Endereços</h1>
      {erro && <p style={{ color: '#FF6B6B', textAlign: 'center' }}>{erro}</p>}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {enderecos.map((endereco) => (
          <li
            key={endereco.id}
            style={{
              backgroundColor: '#D1E7FD',
              color: '#004B8D',
              margin: '10px 0',
              padding: '10px',
              borderRadius: '4px',
              textAlign: 'center',
            }}
          >
            {endereco.rua}, {endereco.cidade} - {endereco.estado}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaEnderecos;
