const web3 = require("../config/blockchainConfig");

const contractABI =
  require("../../build/contracts/CertificateVerification.json").abi;

const contractAddress = "0xE22ff398384E8FDF41e9e5e7B521cBdF3906A592";

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function storeCertificate(certId, hash) {
  const accounts = await web3.eth.getAccounts();
  return contract.methods.issueCertificate(certId, hash).send({
    from: accounts[0],
    gas: 300000
  });
}

async function verifyCertificate(certId, hash) {
  return contract.methods.verifyCertificate(certId, hash).call();
}

module.exports = { storeCertificate, verifyCertificate };
