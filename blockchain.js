// simple hashing algorithm - just adds * to the end.
const simpleHash = (data) => {
  return data + '*';
}

// Block class to store data, hash and hash of the last block - lastHash (creates a link)
class Block {
  constructor (data, hash, lastHash) {
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
  }
}

// Blockchain class to create a genesis block and an array of all the blocks.
class Blockchain {
  constructor () {
    const genesis = new Block('gen-data', 'gen-hash', 'gen-lastHash');
    this.chain = [genesis];
  }

  addBlock(data) {
    const lastHash = this.chain[this.chain.length - 1].hash;
    const hash = simpleHash(data + lastHash);
    const block = new Block (data, hash, lastHash);
    this.chain.push(block);
  }

}

// testing the implementation
const fooBlock = new Blockchain();
fooBlock.addBlock('one');
fooBlock.addBlock('two');
fooBlock.addBlock('three');

// printing into console - node Blockchain.js
console.log(fooBlock);
