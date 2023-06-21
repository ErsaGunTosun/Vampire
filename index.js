import { config } from 'dotenv';
import { Client, GatewayIntentBits,Routes } from 'discord.js';
import { REST } from '@discordjs/rest';

config();
const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;

const commands = [
    {
        name: 'nerede',
        description: 'Ünlü bir yenilen adamın size birisini bulmaya yardım eder.',
        options: [{
            name: 'kisi',
            description: "Bulunacak kişi",
            type: 3,
            required: true,
        }]
    },
    {
        name: 'nerdesin',
        description: 'Ünlü bir yenilen adamın sözlerini tekrarlar.',
    },
];

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

const rest = new REST({ version: '10' }).setToken(TOKEN);

client.login(TOKEN);

client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
    if (interaction.isChatInputCommand()) {
        if (interaction.commandName === 'nerede') {
            console.log(interaction.options.get('kisi').value);
            await interaction.reply({ content: `${interaction.options.get('kisi').value} burada be burada,Sende buradasın` });
        }else if(interaction.commandName === 'nerdesin'){
            await interaction.reply({ content: `Buradayım be burada,Sende buradasın.` });
        }
    }
});

const main = async () => {
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    } catch (err) {
        console.error(err);
    }

}

main();