const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Options',
	ownersOnly: false,
	category: 'Info',
	run: async (client, message, args) => {
		const cmdname = client.slashcommands.get()
		console.log(cmdname)
		const data = {
			name: 'ping',
			description: 'Replies with Pong!',
		};

		const sscommand = await client.guilds.cache.get('827204137829007361')?.commands.create(data);
		//console.log(sscommand);
		await message.channel.send(`Pong! The bots websocket ping is ${client.ws.ping}ms!`);
	},
};