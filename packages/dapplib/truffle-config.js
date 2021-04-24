require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift rifle stick attitude hover civil army giant'; 
let testAccounts = [
"0x41cd40e0c5249fe145c10ffb6a3096a28a4b1fc2332b90dade042101d688f938",
"0x419e14807fdbea0c30a3dde2a1fed73965c85868ed95ee6544bf68aeb34a1382",
"0xa36ab0969fc47c216eec9e5b51e483ab425df8bad271f9732784612c309bd92e",
"0x384f975207f9c886c92a668167aa7cd66c0ca40b4a0d1da0b1b89e76aa9df4e6",
"0x35dc629ef7174a458edaa7335a85a5f23d51edbfd9d2d30c4adebe515d7fb671",
"0x5285b44edcb01e22365fb25ef1f6229aa0e0026f735abdefa3f48e8a68202c48",
"0x8107bf8114993354476528e757483a40c177408be3200a14b7f2da3bd87b60a0",
"0x0c88b6d8b524b76e73f085bed0d7fe53ae9df1eda9382b8d182dd59ed5442061",
"0x0a2974ce88b6eb69786c54a12ee7d31b4767b3a415127ef87eabbf11c666a434",
"0xc24a82f54128a93e1d467c6ce4c79a21e12687e93666d09e93abd1db2144e5ba"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
