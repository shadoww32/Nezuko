const HMtai = require("hmtai");
const hmtai = new HMtai();
const fs=require("fs")
module.exports={
    name:"elves",
    alias:["eleves","elf"],
    usage:`${global.prefa}elves`,
    desc:"So, it's not Elvis Presley, but i know, you like it :)",
    category:"Nsfw",
    react:"💦",
    start:async(client,m,{command,prefix,nsfw,text,args})=>{
        if(!nsfw.includes(`${m.from}`)) return m.reply('*❌ This not a hentai group pervert*')    
       let waifud = await hmtai.nsfw.elves();
       await client.sendMessage(m.from,{image:{url:waifud}},{quoted:m})

    }
}