      embed.setImage("https://awesomewallpaper.files.wordpress.com/2011/01/star-wars-evil-senate.jpg");
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
      msg.reply('the command you called for does not exist. Available commands are: -401-test, -401-help, -401-commands, -401-music, -401-botinfo');
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
  embed.setThumbnail("https://awesomewallpaper.files.wordpress.com/2011/01/star-wars-evil-senate.jpg");
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
  embed.setThumbnail("https://awesomewallpaper.files.wordpress.com/2011/01/star-wars-evil-senate.jpg");
  embed.addField('Location:', `${delmsg.channel}`);
  channel.sendMessage({embed});
});
client.login(process.env.BOT_TOKEN);
