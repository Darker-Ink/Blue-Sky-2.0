module.exports = {
    name: 'btest',
    description: 'Replies with Pong!',
    options: [{
		name: 'category',
		type: 'STRING',
		description: 'The gif category',
		required: true,
		choices: [
			{
				name: 'Funny',
				value: 'gif_funny',
			},
        ],
    },
],
    async execute(interaction, client) {
        await interaction.reply(`Pong! The bots websocket ping is ${client.ws.ping}ms!`);
        const string = interaction.options.getString('category');

        console.log([string]);
    },
};