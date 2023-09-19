import {SlashCommandBuilder} from 'discord.js'


export const command = new SlashCommandBuilder().setName('五六七八').setDescription('5678 單親媽媽 5678 不同爸爸') 

export const action =  async(ctx) => {
    await ctx.reply('單親媽媽')
}