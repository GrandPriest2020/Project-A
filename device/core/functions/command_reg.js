fn = async (client) => {
console.log('Registering commands [✔️]')
const commands = client.application?.commands
  
//commands?.create({
  //name: 'ping',
 // description: 'Answers with pong',
//}); //ping
//commands?.create({
 // name: 'status',
 // description: 'shows how long is the bot active'
//}); //status
commands?.create({
    name: 'memory_eraser',
    description: 'erase the memory of someone',
    options:[
    {
     name: 'member',
     description: 'select a member to use the memory eraser',
     type: 6,
      required: true
    }]
  }); //eraser

  
//commands?.create({
   // name: 'bonk',
  //  description: 'alguém está te incomodando? usa o bonk!',
   // options:[
  //  {
     // name: 'usuário',
     // description: 'selecione alguém para dar um bonk!',
     // type: 6,
     // required: true
    //}]
 // }); //bonk


  //commands?.create({
     // name: 'teleport',
     // description: 'use teleportation to a channel',
     // options:[
     // {
      //  name: 'channel',
       // description: 'select the channel to use teleportation!',
       // type: 7,
       // required: true
     // }]
  // }); //bonk


console.log('comandos registrados!')  
//  options: [
    //{
     // type: 3,
     // name: "pedido",
     // description: "INSIRA O NOME OU LINK DA MÚSICA",
     // required: true,
   // }
 // ],  
}
module.exports = fn