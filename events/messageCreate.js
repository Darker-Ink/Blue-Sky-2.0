const { prefix, owners } = require('../config.json');

module.exports = {
	name: 'messageCreate',
	async execute(message, client) {
		if(message.content.toLowerCase().includes('https') && message.guild.id === '827204137829007361' && !message.member.permissions.has('BAN_MEMBERS')) return message.delete()
		if(message.content.toLowerCase().includes('http') && message.guild.id === '827204137829007361' && !message.member.permissions.has('BAN_MEMBERS')) return message.delete()
		if(message.content.toLowerCase().includes('www') && message.guild.id === '827204137829007361' && !message.member.permissions.has('BAN_MEMBERS')) return message.delete()
		if(message.content.toLowerCase().includes('discord.gg') && message.guild.id === '827204137829007361' && !message.member.permissions.has('BAN_MEMBERS')) return message.delete()
		if(message.content.toLowerCase().includes('discord.com/invite') && message.guild.id === '827204137829007361' && !message.member.permissions.has('BAN_MEMBERS')) return message.delete()
		if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) {return;}

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const command = args.shift().toLowerCase();

		if (!client.commands.has(command)) return;

		try {
			const cmd = client.commands.get(command);
			if (cmd.ownersOnly && !owners.includes(message.author.id)) {return message.channel.send('This command isnt made for you!');}
			cmd.run(client, message, args);
		}
		catch (error) {
			console.log(`There was an error executing the command "${command}": \n${error}`);
			message.reply('There was an error while executing this command! If this happens often, contact the developer!');
		}
	},
};


