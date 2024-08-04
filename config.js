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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_18_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgODAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEzLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAzNixcbiAgICAgICAgNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUxLFxuICAgICAgICA1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDkwLFxuICAgICAgICA0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDgxLFxuICAgICAgICAyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE4LFxuICAgICAgICA4MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTksXG4gICAgICAgIDcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWjhiczFlV2lQSWRVRkp1RU1zaXdRRGVLbnNsQ1Z4T3pIQURjaEE2ajZpST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidDRWN3g0dUlUZHF1OFNrclpsOXVFd1wiLFxuICBcInBob25lSWRcIjogXCI3ZTQ4OTMxNC0yMGJlLTRiNGEtODIyNS01NWJkYTdjOTdjYjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM4LFxuICAgICAgMTcsXG4gICAgICAxNzcsXG4gICAgICAyMTcsXG4gICAgICAzOSxcbiAgICAgIDI5LFxuICAgICAgMTksXG4gICAgICAxMjksXG4gICAgICAxNzQsXG4gICAgICAxNDgsXG4gICAgICA3MSxcbiAgICAgIDMsXG4gICAgICAxNjksXG4gICAgICAyMzgsXG4gICAgICAxMTMsXG4gICAgICAwLFxuICAgICAgMTQzLFxuICAgICAgODUsXG4gICAgICA4MixcbiAgICAgIDE0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAxNTYsXG4gICAgICAxNzIsXG4gICAgICAyMCxcbiAgICAgIDE4MyxcbiAgICAgIDg1LFxuICAgICAgODQsXG4gICAgICA4MyxcbiAgICAgIDIwNSxcbiAgICAgIDIwMCxcbiAgICAgIDgxLFxuICAgICAgOTUsXG4gICAgICAxNDEsXG4gICAgICA0OCxcbiAgICAgIDE1LFxuICAgICAgMjIwLFxuICAgICAgMjI1LFxuICAgICAgMTYzLFxuICAgICAgMCxcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWRTdIOUhUM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjEyNzA4ODY5OTkzOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiYm90IEhhbXphICBhbWlybmlcIixcbiAgICBcImxpZFwiOiBcIjE1NDk0OTg3MDY5MDQ1NzoyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLcVkvR2NRaFArOXRRWVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpkQ3VaMHVScCtvaGEwdXBkQXM1N0ZwaXNNNXZ5WlBpSURudUxpNHg2QzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ1JRTzBIY0diSytrR3RKcml2Zm9zTVZJYmIwa0FXejlBQy9BRnRWbzRCRzdxQXIvcVBOTlE2T1hkMC96U0wvUU15MldscG9vSHZBTnZVbXU3NXJCQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOUpFRzNxL2FHT3NjVmQxRmVyM082Y2dJT0tPWXN3eGRPSjh6c0NLTm9jUHhOYXJGUUY3REJZSTIwRWlja01ZOGxOQXhyamlMMlRXMnFQMGlIRW5qZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNzA4ODY5OTkzOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3Nzc0ODAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFb1NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVvUy5qc29uIjogIntcImtleURhdGFcIjpcIjBxQVJDMEVEcW1Ld1N6ck1pVUZCNlcxREdmTWdOMUxpN3h6MHlic3VQbFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjE4MDQxMzg1LFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzLDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
