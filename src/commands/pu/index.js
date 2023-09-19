import {SlashCommandBuilder} from 'discord.js'


export const command = new SlashCommandBuilder().setName('pu').setDescription('puuuuuuuu') 

export const action =  async(ctx) => {
    await ctx.reply('assy')
}