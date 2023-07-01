import { SlashCommandBuilder } from "@discordjs/builders";

const roleDeleteCommand = new SlashCommandBuilder()
    .setName("deleterole")
    .setDescription("delete a role")
    .addRoleOption(option => option.setName('role').setDescription('Choose a role to delete').setRequired(true));
    
export default roleDeleteCommand.toJSON();

