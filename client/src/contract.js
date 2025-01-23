import web3 from './web3';
import contractABI from './path/to/your/contractABI.json'; 
const contractAddress = '2HBRBmNiqJLJsQKzzXGngAQyRMMwQqFMt5fjqS3eTsWg'; // 

const contract = new web3.eth.Contract(contractABI, contractAddress);

export default contract;

export const getBalance = async (account) => {
  return await contract.methods.getBalance().call({ from: account });
};

export const deposit = async (amount, account) => {
  return await contract.methods.deposit(amount).send({ from: account });
};
