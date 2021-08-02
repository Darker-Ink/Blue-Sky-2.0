const fs = require('fs');
const { Client, Collection } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.slashcommands = new Collection();
client.commands = new Collection();
client.menus = new Collection();


const eventFiles = fs
	.readdirSync('./events')
	.filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

const scommandFolders = fs.readdirSync('./slashcommands');
scommandFolders.forEach((x) => {
	const scommandFiles = fs
		.readdirSync(`./slashcommands/${x}`)
		.filter((file) => file.endsWith('.js'));
	scommandFiles.forEach((d) => {
		const scommand = require(`./slashcommands/${x}/${d}`);

		client.slashcommands.set(scommand.name, scommand);
		(async () => {
			const data = {
				name: scommand.name,
				description: scommand.description,
				options: scommand.options,
			};
			console.log(scommand.name + ' Has Loaded')
			await client.guilds.fetch('827204137829007361')
			await client.guilds.fetch('639477525927690240')
			setTimeout(async() => {
			await client.guilds.cache.get('827204137829007361')?.commands.create(data);
			await client.guilds.cache.get('639477525927690240')?.commands.create(data);
			}, 3000);
		})()
	});
});

const commandFolders = fs.readdirSync('./commands');
commandFolders.forEach((x) => {
	const commandFiles = fs
		.readdirSync(`./commands/${x}`)
		.filter((file) => file.endsWith('.js'));
	commandFiles.forEach((d) => {
		const command = require(`./commands/${x}/${d}`);

		client.commands.set(command.name, command);
	});
});

fs.readdir('./menus/', (err, files) => {
	if (err) console.log(err);

	const jsfile = files.filter((f) => f.split('.').pop() === 'js');
	if (jsfile.length <= 0) {
		console.log('No menus.');
		return;
	}

	jsfile.forEach((f) => {
		const props2 = require(`./menus/${f}`);
		client.menus.set(f, props2);
	});
});

client.login(token);