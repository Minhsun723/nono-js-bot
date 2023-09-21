import {SlashCommandBuilder} from 'discord.js'


export const command = new SlashCommandBuilder().setName('不要停').setDescription('🎵不管怎樣我都不會停🎵') 

export const action =  async(ctx) => {
    await ctx.reply({files:[{
        attachment: 'C:\\Users\\Sidney\\Desktop\\NoNoBot\\nono-js-bot\\pic\\stop.mp4',
        name: 'stop.mp4'
    }]})
}