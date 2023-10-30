const {Web3} = require('web3')
const web3 = new Web3('https://goerli.infura.io/v3/ae7fea8f24634a11abb89147e88bda8b');

const contractABI = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"Winner","type":"event"},{"inputs":[],"name":"attempt","outputs":[],"stateMutability":"nonpayable","type":"function"}]; // Replace with your contract's ABI
const contractAddress = '0x1c33BB9F7D0E0afb0c2Fe29AdA0778f0D739C9ee'; 

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Set the sender's address (your wallet address)
const senderAddress = '0x86167aaE5eF2A65e0aD23A3171e3aa172b94F462'; // Replace with your wallet's address
const privateKey = 'f93852177724a633414904fb5d5db8c73232899d9c26849c31944271abfafac8'; // Replace with your wallet's private key

async function main(){
   let tx = await contract.methods.attempt().call({
    from: senderAddress,
    gas: '1000000'
   });
    console.log()
}

main().catch(err => {
    console.log(err)
})