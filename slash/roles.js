import { SlashCommandBuilder } from "@discordjs/builders";

const rolesCommand = new SlashCommandBuilder()
    .setName("addrole")
    .setDescription("Add a role to a user")
    .addRoleOption(option => option.setName('newrole').setDescription('adds the new Role').setRequired(true));

export default rolesCommand.toJSON();
