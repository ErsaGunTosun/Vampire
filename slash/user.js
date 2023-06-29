import { SlashCommandBuilder } from "@discordjs/builders";

const userCommand = new SlashCommandBuilder()
    .setName("user")
    .setDescription("select a user")
    .addUserOption(option => option.setName('user').setDescription('the user').setRequired(true));

export default userCommand.toJSON();
