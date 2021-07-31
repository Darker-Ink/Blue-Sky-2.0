module.exports = {
    name: 'btest',
    description: 'Replies with Pong!',
    options: [{
            name: 'input',
            description: 'Enter a string',
            type: 'STRING',
        },
        {
            name: 'int',
            description: 'Enter an integer',
            type: 'INTEGER',
        },
        {
            name: 'num',
            description: 'Enter a number',
            type: 'NUMBER',
        },
        {
            name: 'choice',
            description: 'Select a boolean',
            type: 'BOOLEAN',
        },
        {
            name: 'target',
            description: 'Select a user',
            type: 'USER',
        },
        {
            name: 'destination',
            description: 'Select a channel',
            type: 'CHANNEL',
        },
        {
            name: 'muted',
            description: 'Select a role',
            type: 'ROLE',
        },
        {
            name: 'mentionable',
            description: 'Mention something',
            type: 'MENTIONABLE',
        },
    ],
    async execute(interaction, client) {
        await interaction.reply(`Pong! The bots websocket ping is ${client.ws.ping}ms!`);
        const string = interaction.options.getString('input');
        const integer = interaction.options.getInteger('int');
        const number = interaction.options.getNumber('num');
        const boolean = interaction.options.getBoolean('choice');
        const user = interaction.options.getUser('target');
        const member = interaction.options.getMember('target');
        const channel = interaction.options.getChannel('destination');
        const role = interaction.options.getRole('muted');
        const mentionable = interaction.options.getMentionable('mentionable');

        console.log([string, integer, boolean, user, member, channel, role, mentionable]);
    },
};