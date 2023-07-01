import { SlashCommandBuilder } from "@discordjs/builders";

const roleCreateCommand = new SlashCommandBuilder()
    .setName("createrole")
    .setDescription("Create a role")
    .addStringOption(option => option.setName('rolename').setDescription('Choose a name for the role').setRequired(true))
    .addIntegerOption(option => option.setName('colorredvalue').setDescription('Choose a color for the role').setRequired(true))
    .addIntegerOption(option => option.setName('colorgreenvalue').setDescription('Choose a color for the role').setRequired(true))
    .addIntegerOption(option => option.setName('colorbluevalue').setDescription('Choose a color for the role').setRequired(true));

export default roleCreateCommand.toJSON();
