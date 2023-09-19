import {SlashCommandBuilder} from 'discord.js'


export const command = new SlashCommandBuilder().setName('bus').setDescription('Bus Bus Bus!!!') 

export const action =  async(ctx) => {
    await ctx.reply('想要巴士嗎?')
}