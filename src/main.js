import { Client, Events, GatewayIntentBits, ActivityType } from 'discord.js'
import vueInit from '@/core/vue'
import dotenv from 'dotenv'
import { loadCommands, loadEvents } from '@/core/loader'
import {useAppStore} from '@/store/app'


vueInit()
dotenv.config()
loadCommands()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const appStore = useAppStore()
appStore.client = client

loadEvents()


let status = [
    {
        name: "豬哥亮-東山再起",
        type: ActivityType.Listening,
    },
    {
        name: "豬哥亮-我是恁老爸",
        type: ActivityType.Listening,
    },
    {
        name: "安巴興",
    },
    {
        name: "賴致瑋的iMac",
    },
    {
        name: "Pussy Tinh",
        type: ActivityType.Listening,
    },
]


client.on('ready',(c) => {

    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random]);
    }, 10000)
})


client.login(process.env.TOKEN);