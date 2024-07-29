const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_50_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDc2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI1LFxuICAgICAgICA3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU1LFxuICAgICAgICA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0LFxuICAgICAgICA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODYsXG4gICAgICAgIDMyLFxuICAgICAgICAyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExLFxuICAgICAgICA1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgNjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc2LFxuICAgICAgICA5MSxcbiAgICAgICAgODEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDgsXG4gICAgICAgIDYsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjksXG4gICAgICAgIDkwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDk3LFxuICAgICAgICAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMSxcbiAgICAgICAgNjksXG4gICAgICAgIDM2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlR4N05KbFN0QWsvRERpSnl3Q1ovandvQjhtUHZUV2dpbEtHUUlkQ3RkWUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkw2SUhteXR5UzZpc0ZtSTA3cE12WUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzQ4ZGQxZWQtZmY0YS00OGVlLWIxODktYWIxNDhhMjQxNWYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MSxcbiAgICAgIDE5NyxcbiAgICAgIDE5MCxcbiAgICAgIDU0LFxuICAgICAgMTEyLFxuICAgICAgMjQzLFxuICAgICAgMTM3LFxuICAgICAgMjA4LFxuICAgICAgMjU1LFxuICAgICAgOTIsXG4gICAgICAyNTAsXG4gICAgICAyMDUsXG4gICAgICA0OCxcbiAgICAgIDEyLFxuICAgICAgMjI4LFxuICAgICAgMjM0LFxuICAgICAgMjEzLFxuICAgICAgMjQyLFxuICAgICAgMTE0LFxuICAgICAgMjMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgOTEsXG4gICAgICAxMjAsXG4gICAgICAxODIsXG4gICAgICAxODIsXG4gICAgICA1NixcbiAgICAgIDEwMixcbiAgICAgIDEyNSxcbiAgICAgIDU2LFxuICAgICAgMTM1LFxuICAgICAgMTM0LFxuICAgICAgMTE4LFxuICAgICAgNzksXG4gICAgICA2MixcbiAgICAgIDEwNixcbiAgICAgIDIwLFxuICAgICAgNDksXG4gICAgICAxMDYsXG4gICAgICAyMzMsXG4gICAgICA1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXUzk2UkxIWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjEyNjI0ODU1OTM5OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiaGFtemFhbWlybmlcIixcbiAgICBcImxpZFwiOiBcIjc2NzA0MjIzNjU0MDY4OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ppeXNPSUVFT3ZrbjdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNWlYODY1aCtJTTFIbncyVGxNdkJBNDl4YzNZTFRjWnZ0c0p0Ym1rNC9SND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSN0U3eVdERXoySWZmaGp2MjZKaXh5MDc0WVMzUlhmZzFZcGpLTGdZN3JKMWxXMEpEZDJaTFd5QWVLenNtSkJmanBXTWxaOHFxMVU2bmN0d0xzS2dEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQb21aajBrV2I3MDJxU05xcU1vOTRySE5oUTZ6Si9nVEhSY1dvTDRDUVBBZU5vUG5HSlZ4NUxZNExwUHNsSEdrMnprRWlnNTVJcHpmK2FWM0poUWhDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMTI2MjQ4NTU5Mzk6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjI4MjYwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBBd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUEF3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiYkg2RjFrNVIyYldpR1dscjAzaFBpTXVCS0ZoTGwwK3RRYzJ2T2YzM0s3WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjgwMDU1NTc2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIyODI2MTI4MzZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
