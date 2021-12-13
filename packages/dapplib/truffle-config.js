require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember honey hockey clinic sun track'; 
let testAccounts = [
"0x3b51a86a5149119090509d3175e9835c35a389ab9bece2cc2b6fbd36c050b431",
"0xd907434efe834cc224891a977dc4931380babe17abeaa300cf3cf8abd38e6fcc",
"0xd50f0ec41fbaa48a3e8916f16425116fd7aecfeb1ecf3ae223e65430f0ea0055",
"0xab267ea476abd33adc5717077cdb2958d8c1e03f82e13afff99a5d0483d39a37",
"0xf3e845e16ab0372a5407de8449cb38cc4de1498c51b49bd98c11167fcd35df9c",
"0x49dda3019e59c77846c370d28233d408a01116c5656a5015d72c112c3d75228b",
"0x53b15879a7ecaad80590ea44885206a57a04631d17ddef6a2eb0c1f465ed85a7",
"0x30997a01ca56f80a1b454779804cd64ba5c01fa963cdf6991b1bcf8e5ee56fab",
"0xa6a960e8392eccc6f6472d3a325810097cadbf399a0a5a6dae427289985f64bf",
"0x79284475b3d95c4968ba8005ce222d898ad2bd91b5a7a0d0fb2ecc5cc6d1850e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

