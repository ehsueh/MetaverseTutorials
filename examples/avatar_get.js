let blockchain = require('../mvs-blockchain-js')({
    url: "https://explorer-testnet.mvs.org/api/"
});
let Metaverse = require('metaversejs');

blockchain.avatar.get('avatarius')
    .then(JSON.stringify)
    .then(console.log)
    .catch(console.error);
