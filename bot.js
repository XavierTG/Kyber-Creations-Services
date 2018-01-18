const Discord = require("discord.js");
const client = new Discord.Client();
const PREFIX = "KCS";
const imagelink = "https://i.imgur.com/b6nm8JN.png"
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.generateInvite(["ADMINISTRATOR"])
  .then(link => {
    console.log(`Generated bot invite link: ${link}`);
  });
  client.user.setGame('with the Kyber Creations server.');
});
client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return msg.channel.sendMessage("Sorry, but I am currently not capable of responding to DMs.");
  console.log(`${msg.author.username} sent "${msg.content}" in #${msg.channel.name}`);
  let channel = msg.channel.guild.channels.find(`name`, `messagelogs`);
  let embed = new Discord.RichEmbed();
  embed.setTitle("Message sent.");
  embed.setThumbnail("${imagelink}");
  embed.setColor("#A52A2A");
  embed.setDescription(`${msg.author.username} sent a message.`);
  embed.addField("Location:", `${msg.channel}`);
  embed.addField('Content:', `${msg.content}`);
  channel.sendMessage({embed});
  if (!msg.content.startsWith(PREFIX)) return;
  var args = msg.content.substring(PREFIX.length).split(" ");
  switch (args[0].toLowerCase()) {
    
    case "test":
      msg.reply('this is a response to a test prompt message.');
      break;
    case "botinfo":
      let embed = new Discord.RichEmbed();
      embed.setTitle('CAR: 401st Discord Manager Bot Information');
      embed.setDescription("Work in progress bot developed by KyberWolffe for use in monitoring and advancing Kyber Creations' projects.");
      embed.setColor("#A52A2A");
      embed.setImage("${imagelink}");
      msg.channel.sendMessage({embed});
      break;
    case "skip":
      var server = servers[msg.guild.id];
      
      if (server.dispatcher) server.dispatcher.end();
      break;
    case "stop":
      var server = servers[msg.guild.id];
      if (msg.guild.voiceConnection) msg.guild.voiceConnection.disconnect();
      break;
    default:
      msg.reply('the command you called for does not exist. Available commands are: -KCS-test, -KCS-help, -KCS-commands, -KCS-music, -KCS-botinfo');
      break;
      
  }
});
client.on('messageUpdate', function(old, newm) {
  if (newm.author.bot) return;
  let channel = newm.channel.guild.channels.find('name', 'messagelogs');
  let person = newm.author.username;
  console.log(`${channel.name}`);
  console.log(`${person}`);
  let oldmsg = old.content;
  let newmsg = newm.content;
  console.log('Edit thumbnail was set.');
  console.log(`${person} edited a message.`);
  console.log(`Before: ${oldmsg}`);
  console.log(`After: ${newmsg}`);
  console.log('______________');
  let embed = new Discord.RichEmbed();
  embed.setTitle('Message edit:');
  console.log('Edit title was set.')
  embed.setColor("#A52A2A");
  console.log('Edit color was set.');
  embed.setDescription(`${person} edited a message.`);
  console.log('Edit description was set.');
  embed.addField('Original message:', `${oldmsg}`);
  console.log('Original message field added.');
  embed.addField('Message edit:', `${newmsg}`);
  console.log('New message field added.');
  embed.setThumbnail("${imagelink}");
  console.log('Thumbnail set.');
  embed.addField('Location:', `${newm.channel}`);
  console.log('Location(channel) field added.');
  channel.sendMessage({embed});
});
client.on('messageDelete', function(delmsg) {
  console.log('Message deletion detected.');
  let channel = delmsg.channel.guild.channels.find('name', 'messagelogs');
  let person = delmsg.author.username;
  let embed = new Discord.RichEmbed();
  embed.setTitle('Message deletion:');
  embed.setColor("#A52A2A");
  embed.setDescription(`${person} deleted a message.`);
  embed.addField('Content:', `${delmsg.content}`);
  embed.setThumbnail("${imagelink}");
  embed.addField('Location:', `${delmsg.channel}`);
  channel.sendMessage({embed});
});
client.login(process.env.BOT_TOKEN);
