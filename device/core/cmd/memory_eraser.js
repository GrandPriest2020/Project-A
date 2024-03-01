command = async (client, interaction) => {
 const delay = ms => new Promise(resolve => setTimeout(resolve, ms)); 
 console.log('This is the type: '+interaction.options.data[0]?.type) 
s1 = interaction.options.data[0]?.value
type = interaction.options.data[0]?.type

//var admins =['680077059137339422', '488084678713278474', '490180199388938250', '707633408834011146']

var user = interaction.user.id;
  
if (type === 6) {    
  
  const embed = {
    color: process.env.color,
    image: {
      url: 'https://media.discordapp.net/attachments/1160968118072516608/1212923953161441340/mem_eraser_for_device.gif?ex=65f39a75&is=65e12575&hm=c3d16df72ea51701acaf45204e77c8a3121c10808db6cb8db76c6904b785ae46&='
    },
    description: `<@${interaction.user.id}> used memory eraser on <@${interaction.options.data[0].value}>`
  }  

interaction.editReply({embeds: [embed]});}


};


module.exports = command