import { Client, GatewayIntentBits, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import { config } from 'dotenv';

// slash commands
import WhereCommand from './slash/where.js';
import RolesCommand from './slash/roles.js';
import UserCommand from './slash/user.js';
import channelCommand from './slash/channel.js';

// .env file get variables
config();
const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;

// client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

// rest api for slash commands
const rest = new REST({ version: '10' }).setToken(TOKEN);

// bot login and ready event
client.login(TOKEN);

client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
});

// slash command interaction event
client.on('interactionCreate', async (interaction) => {
    if (interaction.isChatInputCommand()) {
        if (interaction.commandName === 'nerede') {
            console.log(interaction.options.get('kisi').value);
            await interaction.reply({ content: `${interaction.options.get('kisi').value} burada be burada,Sende buradasın` });
        } else if (interaction.commandName === 'nerdesin') {
            await interaction.reply({ content: `Buradayım be burada,Sende buradasın.` });
        }
        else if (interaction.commandName === 'addrole') {
            await interaction.reply({ content: `${interaction.options.get('newrole').value} ne ?` });
        }
    }
});



const main = async () => {

    const commands = [
        WhereCommand,
        RolesCommand,
        UserCommand,
        channelCommand
    ];
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    } catch (err) {
        console.error(err);
    }

}

main();