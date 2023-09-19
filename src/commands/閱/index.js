import {SlashCommandBuilder} from 'discord.js'


export const command = new SlashCommandBuilder().setName('閱').setDescription('你再閱一次你試試看') 

export const action =  async(ctx) => {
    await ctx.reply('閱你媽鮑魚')
}