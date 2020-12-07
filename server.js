const express = require("express");
const Discord = require("discord.js");
const ytdl    = require("ytdl-core");

const bot = new Discord.Client();
const token = process.env.DISCORD_TOKEN;
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
const listener = app.listen(process.env.PORT, () => {

});
bot.once("ready", () => {
  
});
bot.on("message", message => {
  
  
 if (message.content == "!calkeke") {
    // kullanıcının olduğu kanala bağlan
    message.member.voice.channel.join().then(VoiceConnection => {
        // Playing the music, and, on finish, disconnecting the bot.
        VoiceConnection.play("https://yayin.radyoseymen.com.tr:1070/;stream.mp3").on("finish");
        message.reply("Çalıyorum keke...");
    }).catch(e => console.log(e))
};
  
if(message.content==="!cal") {
  
   if(!message.member.voice.channel) { // buradan başlayan kodda eğer kullanıcı bir ses kanalında değilse ona girmesini söyledik.
    message.channel.send("bir ses kanalında olmalısın")   
     
     return;
   }
  
  message.channel.send("-p çal keke çal")
  message.member.voice.channel.join()
     
}                                      
  
if(message.content=="naber") {
  message.channel.send("Teşekür ederim, Sen nasılsın?")
}

if(message.content.toLowerCase() == "sa") {
  message.channel.send("AS");  
}
});
bot.login(process.env.DISCORD_TOKEN);