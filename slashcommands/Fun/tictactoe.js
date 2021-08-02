module.exports = {
	name: 'tictactoe',
	description: 'Make a new Thread!',
    options:[
        {
            name: 'user',
            description: 'Select a user',
            type: 'USER',
            required: true,
        },
],
	async execute(interaction, client) {
        const string = interaction.options.getString('input');
		console.log(interaction.channel.name)
	},
};
