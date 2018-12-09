const simpleHash = (data) => {
  return data + '*';
}


class Block {
  constructor (data, hash, lastHash) {
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
  }
}

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

const fooBlock = new Blockchain();
fooBlock.addBlock('one');
fooBlock.addBlock('two');
fooBlock.addBlock('three');


console.log(fooBlock);
