import Web3 from 'web3';

const web3 = new Web3(window.ethereum);
const constractAddress = '2HBRBmNiqJLJsQKzzXGngAQyRMMwQqFMt5fjqS3eTsWg'
const contractABI = []
// Solicitar acesso à carteira
const enableEthereum = async () => {
  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  } catch (error) {
    console.error("Erro ao acessar carteira: ", error);
  }
};

enableEthereum();

export default web3;
web3