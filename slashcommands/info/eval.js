const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'eval',
    description: 'Evals Code',
    options: [{
            name: 'input',
            description: 'Enter a string',
            type: 'STRING',
        },
    ],
    async execute(interaction, client) {
        //console.log(interaction.user.id)
        if(interaction.user.id != '379781622704111626') return interaction.reply({ content: "Bruh you aren't the owner bitch", ephemeral: true });
        const string = interaction.options.getString('input');
        const message = interaction.message;
        let evaled = eval(string)
        const embed = new MessageEmbed()
        .setTitle('Evaled')
        .addField('Input', "```js\n" + string + "\n```")
        .addField('Output', "```js\n" + evaled + "\n```")
        await interaction.reply({embeds: [embed]});
        

        //console.log([string]);
    },
};