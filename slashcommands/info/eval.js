const {
    MessageEmbed
} = require("discord.js");
const e = require("express");

module.exports = {
    name: 'eval',
    description: 'Evals Code',
    options: [{
		name: 'async',
		type: 'STRING',
		description: 'If the code is ran async or not',
		required: true,
		choices: [
			{
				name: 'True',
				value: 'async',
			},
            {
				name: 'False',
				value: 'sync',
			},
        ],
    },
        {
            name: 'input',
            description: 'Enter a string',
            type: 'STRING',
            required: true,
        },
    ],
    async execute(interaction, client) {
        if (interaction.user.id != '379781622704111626') return interaction.reply({
            content: "Bruh you aren't the owner bitch",
            ephemeral: true
        });
        const boolean = interaction.options.getString('async');
        const string = interaction.options.getString('input');
        if(boolean === 'async') {
            (async () => {
                let evaled = eval(string)
            return await interaction.reply('This is running in async')
            })()
        }
        console.log()
        console.log(boolean)
        console.log()
        console.log(string)
        interaction.reply({content: "ONO YOU EVALED SOMETHING RUNNNN", ephemeral: true})
    }
}