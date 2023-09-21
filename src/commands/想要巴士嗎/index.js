import {SlashCommandBuilder} from 'discord.js'


export const command = new SlashCommandBuilder()
    .setName('安巴興')
    .setDescription('找一個人跟你一起巴士吧!') 
    .addStringOption(option =>
        option.setName('user')
        .setDescription('找一個你想巴士的人')
        .setRequired(true)
        )

export const action =  async(ctx) => {
    const targetUser = ctx.options.getString('user');
    await ctx.reply(`${targetUser} 一起來巴士吧`)
}