"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Block = /** @class */ (function () {
    function Block(index, hash, previousHash, data, timestamp) {
        this.data = data;
        this.hash = hash;
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
    }
    return Block;
}());
var genesisBlock = new Block(0, "sh1eks", "", "data123", 20374);
var blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map