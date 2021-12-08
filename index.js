const Discord = require("discord.js");
const Yaxi = new Discord.Client();
//////// playing or dnd  streaming ////////
/*Yaxi.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `Why are you gay?`,`i'm not a bad guy ✨`,
 
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    Yaxi.user.setActivity(STREAMING, {      
    type: "STREAMING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});*/
///////////////////////
Yaxi.on("ready", () => {
    var join = Yaxi.channels.get("918117170653843476"); /// id voice
    if (join) join.join();
  });
//////////////// tokn lera da bne 
Yaxi.login("OTE4MTk1MzE1NjI1MDYyNDMx.YbEGzw.wZkoj_CvDkdlrJmTl57Ql7DkOOI");
