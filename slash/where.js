import { SlashCommandBuilder } from "@discordjs/builders"
const WhereCommand = new SlashCommandBuilder()
.setName('nerede')
.setDescription('Ünlü bir yenilen adamın size birisini bulmaya yardım eder.')
.addStringOption(option => option.setName('kisi').setDescription('Bulunacak kişi').setRequired(true));

export default WhereCommand.toJSON();
