import { SlashCommandBuilder } from "@discordjs/builders";

const channelCommand = new SlashCommandBuilder()
    .setName("channel")
    .setDescription("select a channel")
    .addChannelOption(option => option.setName('channel').setDescription('the channel').setRequired(true))
    .addBooleanOption(option => option.setName('deletemsg').setDescription('the bool').setRequired(true))
    .addIntegerOption(option => option.setName('number').setDescription('the number').setRequired(true))
    .addAttachmentOption(option => option.setName('attachment').setDescription('the attachment').setRequired(true));
    

export default channelCommand.toJSON();
