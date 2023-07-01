import { Client, GatewayIntentBits, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import { config } from 'dotenv';

// Role commands
import roleCreateCommand from './slash/Role/create.js';
import roleDeleteCommand from './slash/Role/delete.js';
import roleGiveCommand from './slash/Role/give.js';
import roleTakeCommand from './slash/Role/take.js';


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
        else if(interaction.commandName === 'createrole'){
            interaction.guild.roles.create({name: interaction.options.get('rolename').value, color: [interaction.options.get('colorredvalue').value, interaction.options.get('colorgreenvalue').value, interaction.options.get('colorbluevalue').value]})
            .then(role => interaction.reply({content: `Role ${role} created with color ${role.color}`}))
        }
        else if(interaction.commandName === 'deleterole'){
            interaction.guild.roles.cache.get(interaction.options.get('role').value).delete()
            .then(role => {
                interaction.reply({content: `Role ${role.name} deleted`})
            })
        }
        else if(interaction.commandName === 'giverole'){
            interaction.guild.members.cache.get(interaction.options.get('user').value).roles.add(interaction.options.get('rolename').value)
            .then (members => {
                interaction.reply({content: `Role ${interaction.guild.roles.cache.get(interaction.options.get('rolename').value)} given to ${members}`})
            })
        }
        else if(interaction.commandName === 'takerole'){
            interaction.guild.members.cache.get(interaction.options.get('user').value).roles.remove(interaction.options.get('rolename').value)
            .then (members => {
                interaction.reply({content: `Role ${interaction.guild.roles.cache.get(interaction.options.get('rolename').value)} taken to ${members}`})
            })
        }

    }
});



const main = async () => {

    const commands = [
        roleCreateCommand,
        roleDeleteCommand,
        roleGiveCommand,
        roleTakeCommand
    ];
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    } catch (err) {
        console.error(err);
    }

}

main();