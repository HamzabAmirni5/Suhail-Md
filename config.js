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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_29_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDg3LFxuICAgICAgICAxMDksXG4gICAgICAgIDksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDYxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDk0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDcwLFxuICAgICAgICA0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDQxLFxuICAgICAgICA5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYzLFxuICAgICAgICA3NixcbiAgICAgICAgNzAsXG4gICAgICAgIDU0LFxuICAgICAgICA0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAwLFxuICAgICAgICA4MCxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDI3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNyxcbiAgICAgICAgMixcbiAgICAgICAgMTQsXG4gICAgICAgIDcwLFxuICAgICAgICA4OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDU2LFxuICAgICAgICA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDcxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTGFtSHdjMnZseXRxZkJ0TzR4TmVaLzB0K1Z1Vkp6TFlDdmt1MVRSZHc3RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLUdGdHN4d3BSUHEzcm1XX0xUMWZkQVwiLFxuICBcInBob25lSWRcIjogXCI5ZTQwMjM3OC01N2Y3LTRlZjItYTMwMS04ZmYyZGE4ODEyMDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU4LFxuICAgICAgNDcsXG4gICAgICAyMjksXG4gICAgICAxODgsXG4gICAgICAyMjEsXG4gICAgICA5MixcbiAgICAgIDY0LFxuICAgICAgMTU4LFxuICAgICAgMTY4LFxuICAgICAgMjIwLFxuICAgICAgMTUxLFxuICAgICAgMTM3LFxuICAgICAgMCxcbiAgICAgIDE1MCxcbiAgICAgIDI0MCxcbiAgICAgIDUzLFxuICAgICAgOTIsXG4gICAgICAyMjQsXG4gICAgICAxNCxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMCxcbiAgICAgIDE4MCxcbiAgICAgIDIxMixcbiAgICAgIDQ3LFxuICAgICAgMjIyLFxuICAgICAgMTA0LFxuICAgICAgMjAzLFxuICAgICAgMTMzLFxuICAgICAgMzksXG4gICAgICAyMzksXG4gICAgICAzMSxcbiAgICAgIDEwMixcbiAgICAgIDcyLFxuICAgICAgMzIsXG4gICAgICAxNjMsXG4gICAgICAxNDUsXG4gICAgICA3NCxcbiAgICAgIDI0NSxcbiAgICAgIDE0NyxcbiAgICAgIDE1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWUzRESEZZUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjEyNzA4ODY5OTkzOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiYm90IEhhbXphICBhbWlybmlcIixcbiAgICBcImxpZFwiOiBcIjE1NDk0OTg3MDY5MDQ1NzoyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLcVkvR2NRcXUzTnRRWVlCQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpkQ3VaMHVScCtvaGEwdXBkQXM1N0ZwaXNNNXZ5WlBpSURudUxpNHg2QzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaG5xbm83VlhoQnRDV0xaRFFJMXRtYlRPd29adjZIQXN1SjZTN2NoR1JGZDZuQWJLWEpQSnV0RkloVWRnYXBFOGplNThNU1N3WGNoK29zOEFOUTM3QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM0FYdDRFN3Z6My9TWFBGZ0dwTU50RjExS0d1dXJyM2xIZkh5dFFZUTRtZGJFSk9qTWpXUDhqTWZqY0xUVnNYM1IrYlNqMmRTSTM4QkhZMDQzOEE3RGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNzA4ODY5OTkzOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwMzczNTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFb1NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVvUy5qc29uIjogIntcImtleURhdGFcIjpcIjBxQVJDMEVEcW1Ld1N6ck1pVUZCNlcxREdmTWdOMUxpN3h6MHlic3VQbFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjE4MDQxMzg1LFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzLDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
