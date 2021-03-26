class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.data = data;
    this.hash = hash;
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "sh1eks", "", "data123", 20374);

let blockchain: [Block] = [genesisBlock];
console.log(blockchain);

export {};
