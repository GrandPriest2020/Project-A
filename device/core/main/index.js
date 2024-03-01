const code = async () => {//boot
console.time('Initializing time');
console.time();
console.info('Starting...')
console.log('Device activaded [✔️]');
process.on('uncaughtException', (err) => {
  console.error('Erro não tratado:', err);
  // Faça o tratamento do erro aqui, como registrar em um arquivo de log ou enviar uma notificação.
});
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
//variables
device = require('../utils/discord.js');
const axios = require('axios')
// fetch from'./fetch.mjs'
functions = require('../utils/functions.js');
var queue = new Map();
proces = require('./variables.json');
//device.client_login;
device.client_login(proces.token);
device.client.on('ready',() => {
device.client.testing_thing = 'a test that has been passed'  
console.log('login sucessful');
functions.f.f2(device.client, queue);
//console.log(device.client.application.commands);
//console.log(device.client.application.commands);
})
device.client.on('messageCreate', async message => {
if (message.content === 'reg_comands' && message.author.id === '680077059137339422') {
 functions.f.f3(device.client);
} else {console.log('bruh')}
});

}

code()