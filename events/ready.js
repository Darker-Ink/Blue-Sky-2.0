module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {

		// ──────────────────────────────────────────────────────────────────── [ Sets the bots activity ]

		client.user.setActivity('DarkerInk rewrite me', { type: 'WATCHING' });

		// ────────────────────────────────────────────────────────────────────  [ Adds a little indicator to indicate the bot is ready! (Runs for 30 seconds) ]

		console.log('The bot has awakened');
		console.log(`Logged in as: ${client.user.tag}`);

		// ────────────────────────────────────────────────────────────────────
	},
};