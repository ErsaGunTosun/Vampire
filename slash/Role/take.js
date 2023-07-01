import { SlashCommandBuilder } from "@discordjs/builders";

const roleTakeCommand = new SlashCommandBuilder()
    .setName("takerole")
    .setDescription("take a role from a user")
    .addRoleOption(option => option.setName('rolename').setDescription('Choose a name for the role').setRequired(true))
    .addUserOption(option => option.setName('user').setDescription('Choose a user to take the role').setRequired(true));

export default roleTakeCommand.toJSON();
