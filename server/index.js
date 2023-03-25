const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "0xef3181a61eb19f38de977dd753608ab120997658": 100,
  "0xba776351778dbf5d8f08378467a9faa9c3937627": 50,
  "0xdc5e45a0e93011e9c7ddfa337e3bf463603522ef": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  // Recover public key from signature and recovery bit
  async function recoverPublicKey(signature) {
    const publicKey = await secp.recoverPublicKey(hashMsg, signature, recoveryBit);
    return publicKey;
    }
  // Get addres of sender from public keys;
    function getAddress(publicKey) {
    const address = "0x"+toHex(keccak256(publicKey.slice(1)).slice(-20));
    return address;
    }
     
    // Compare address with sender
    if (address != sender) {
      res.status(401).send({
        message: "Not authorised!"
      })};
  

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
