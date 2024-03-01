command = async (client, interaction) => {

//return interaction.editReply({content: 'Command not ready yet'});
const fs = require('fs');
const portal_file =  fs.readFileSync('/home/runner/projecA/device/core/cmd/images/portal.gif');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, AttachmentBuilder } = require('discord.js');
const member = interaction.member;
const destiny = interaction.options.data[0].value
//console.log(member);
console.log('channelID: '+destiny);
const channelLink = `https://discord.com/channels/${interaction.guild.id}/${destiny}`;
const button = new ButtonBuilder()//.setCustomId('teleport')
.setLabel('teleport')
.setURL(channelLink)
.setStyle(ButtonStyle.Link);
const row = new ActionRowBuilder().addComponents(button);
const portal_gen = new AttachmentBuilder(portal_file, {name: 'portal.gif'})
//var portal = require('./images/portal.gif')
var new_portal = interaction.guild.channels.cache.get(destiny)
if (new_portal.type === 4) return interaction.editReply({content: `Can't use teleportation to this place!`});
  
var response = await interaction.editReply({files: [portal_gen], content: 'Portal ready!', components: [row], fetchReply: true});
//console.log(response)  
  
console.log(new_portal.type)  
new_portal.send({files: [portal_gen], content: `<@${interaction.user.id}> has used teleportation to reach this channel`}).then(msg => {
    setTimeout(() => msg.delete(), 20000)
  });  
  try {
    const collectorFilter = i => i.user.id === interaction.user.id;
    filter = collectorFilter  
    var confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 20_000 });
    console.log('Your confirmation: '+confirmation.url)
//console.log(confirmation)
    if (confirmation.URL === channelLink) {
      //await interaction.guild.members.ban(target);
      //await confirmation.update({ content: `${target.username} has been banned for reason: ${reason}`, components: [] });
      console.log(confirmation);
      response.delete();
      //interaction.editReply({content:'sucess', components: []});
      
      //confirmation.defer();
    }
  } catch (e) {
    //console.log('confirmation: '+confirmation);
    //console.log('and this is the error: '+e);
    interaction.deleteReply();
    //console.log(new_portal.get('Message'));
    //await interaction.editReply({ content: 'you have not used the portal in 10 seconds, closing...', components: [] });
  }
}

module.exports = command