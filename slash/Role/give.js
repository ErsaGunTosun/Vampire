import { SlashCommandBuilder } from "@discordjs/builders";

const roleGiveCommand = new SlashCommandBuilder()
    .setName("giverole")
    .setDescription("give a role from a user")
    .addRoleOption(option => option.setName('rolename').setDescription('Choose a name for the role').setRequired(true))
    .addUserOption(option => option.setName('user').setDescription('Choose a user to give the role').setRequired(true));

export default roleGiveCommand.toJSON();
