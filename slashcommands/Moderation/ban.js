const {MessageEmbed} = require("discord.js");

module.exports = {
    name: 'ban',
    description: 'Bans a User',
    options: [{
            name: 'user',
            description: 'Select a user',
            type: 'USER',
            required: true,
        },
        {
            name: 'reason',
            description: 'If you need a reason for the ban',
            type: 'STRING',
        },
    ],
    async execute(interaction, client) {
        if (!interaction.member.permissions.has('BAN_MEMBERS')) return interaction.reply({
            content: "You can't ban people without the Ban permissions!",
            ephemeral: true
        });
        const string = interaction.options.getString('reason');
        const user = interaction.options.getUser('user');
        const member = interaction.options.getMember('user');
        console.log([member.id, user.id, string])
        const allBans = await interaction.guild.bans.fetch()
        if (allBans.get(user.id)) {
            const banerr = new MessageEmbed()
                .setDescription("Hmm, i don't know how you did this.. But the user is already banned")
                .setColor('RANDOM')
            return interaction.reply({
                embeds: [banerr],
                ephemeral: true
            })
        }

        const mentionedPosition = member.roles.highest.position
        const memberPosition = interaction.member.roles.highest.position

        if (memberPosition <= mentionedPosition) {
            const banerr2 = new MessageEmbed()
                .setDescription("You Can Not Ban This Member Because their role is higher/equal to yours")
                .setColor('RANDOM')

            return interaction.reply({
                embeds: [banerr2]
            })
        }


        //interaction.guild.members.ban(user, {
        //                reason: `${string || 'Banned By ' + interaction.user.tag}`
        //            })

        await interaction.reply(`${user.id} || ${string || 'Banned By ' + interaction.user.tag}`);
    },
};