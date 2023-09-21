import {SlashCommandBuilder} from 'discord.js'


export const command = new SlashCommandBuilder().setName('ibus').setDescription('Bus Bus Bus!!!') 

export const action =  async(ctx) => {
    await ctx.reply({files:[{
        attachment: 'C:\\Users\\Sidney\\Desktop\\NoNoBot\\nono-js-bot\\pic\\ibus.jpg',
        name: 'ibus.png'
    }]})
}