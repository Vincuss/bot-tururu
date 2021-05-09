const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
    console.log(message.content);
    // Join the same voice channel of the author of the message
	if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
        connection.play('audio.mp3');
	}
});

client.login('ODQwMTE4ODAzMTQwNzA2MzA0.YJTjmw.a-ITiKZi6tRrEU6wsEIqiwgdek0');