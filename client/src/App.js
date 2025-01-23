import React, { useState } from 'react';
import { connection, PublicKey } from './solana';
import './App.css';
import logo from './logo.svg';

function App() {
  const [publicKey, setPublicKey] = useState(null);
  const [balance, setBalance] = useState(0);

  const connectWallet = async () => {
    if (window.solana) {
      try {
        const response = await window.solana.connect();
        setPublicKey(response.publicKey.toString());
        const balance = await connection.getBalance(new PublicKey(response.publicKey));
        setBalance(balance / 1e9); // Convert lamports to SOL
      } catch (error) {
        console.error("Erro ao conectar carteira Solana: ", error);
      }
    } else {
      alert("Solana wallet not found! Please install a wallet like Phantom.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={connectWallet}>Conectar Carteira Solana</button>
        {publicKey && (
          <>
            <p>Chave Pública: {publicKey}</p>
            <p>Saldo: {balance} SOL</p>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
