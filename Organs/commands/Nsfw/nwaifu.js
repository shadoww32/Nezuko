const axios = require('axios')
const fs=require("fs")
require ('../../../settings')
module.exports={
    name:"nwaifu",
    alias:["nsfwwaifu"],
    usage:`${prefa}nwaifu`,
    desc:"Gives you random hentai waifu image",
    react:"💦",

    category:"Nsfw",
    start:async(client,m,{command,prefix,text,args})=>{
    if(!nsfw.includes(`${m.from}`)) return m.reply('*❌ This not a hentai group pervert*')


    let wife = await axios.get('https://api.waifu.pics/nsfw/waifu')
    client.sendMessage(m.from, {image: {url:wife.data.url}, caption: `*🥵 AHHHH*`}, { quoted: m })


    }
}