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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349158737073";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_13_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyLFxuICAgICAgICA0NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NCxcbiAgICAgICAgMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA4MSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDkwLFxuICAgICAgICA2MixcbiAgICAgICAgMTA4LFxuICAgICAgICAzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM2LFxuICAgICAgICAxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDYxLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MixcbiAgICAgICAgNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTksXG4gICAgICAgIDk3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDUyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDUyLFxuICAgICAgICAxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkY4RTRMaG1JSEVkOThKUFFMSUNpcloyOVdDc2s2WHhZT0hxUlJjTGllQXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE1ODczNzA3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTNCMUFERENCMDM5RDM1OERBMkJDNTBCMkYzNjU5NUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMzIzNTk4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRCRFRQUE1UU3EyZl9KR1VnQnR1amdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzE1ZjU4NmMtNjdhNS00ZWY3LTk2Y2UtNTU4ZWU3NmQzYmMwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyLFxuICAgICAgMTYyLFxuICAgICAgMCxcbiAgICAgIDIzNCxcbiAgICAgIDQxLFxuICAgICAgMTQ3LFxuICAgICAgNTYsXG4gICAgICAxOCxcbiAgICAgIDE3OCxcbiAgICAgIDE4OCxcbiAgICAgIDE3MSxcbiAgICAgIDE0MSxcbiAgICAgIDEwMSxcbiAgICAgIDEyMixcbiAgICAgIDIyOSxcbiAgICAgIDkyLFxuICAgICAgNDYsXG4gICAgICAyMSxcbiAgICAgIDE2NyxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICAxMTMsXG4gICAgICAxOTYsXG4gICAgICAyMTYsXG4gICAgICAxMzUsXG4gICAgICAxMDQsXG4gICAgICAxOCxcbiAgICAgIDE5OSxcbiAgICAgIDIzMixcbiAgICAgIDEwNixcbiAgICAgIDMyLFxuICAgICAgMTI2LFxuICAgICAgNzEsXG4gICAgICA1MSxcbiAgICAgIDMzLFxuICAgICAgODMsXG4gICAgICAzMixcbiAgICAgIDEwOCxcbiAgICAgIDE4NyxcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCMVAzWjhFUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1ODczNzA3Mzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NTA2MTk2NzI3ODMwMTo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tMUWsxY1FoYVdpdFFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMHUwY0lMQi9nK2huN2hhNGdmVytHajgrQ1RIRGtqOHZTSmxWNGx2eDF4az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIQnA1ajNxSlFKNU93Y1ZCemlRR0ZjMHBUU0RjQW5EZlVSeGR3Tzd5M1VxVFl4c2w5a0VkMVJzUDlzdytBWmxCcGN5RlpHMjFiTDRxREM5eGJxVFRCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwR09yNEpmSUFMV1BrQkhuNVh4QjR1cWtVaUI5QzlXWHR6VTY0WjhJRktEQWpmMXFXY0JiczVicEwzMmNvYXFpZURoZXpyYk1QY3ZMQkZ5MkZ4dVdDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU4NzM3MDczOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzMjM1OTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGV2RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZXZC5qc29uIjogIntcImtleURhdGFcIjpcIlA5L05EQ21PakcvQjA4ZkVTOVFxeEd0V29DamdUN3g2L3ptOUpCYkxRejg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgyNzczNzkxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxODU3NzkzMjM5XCJ9Igp9"  // PUT your SESSION_ID 


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
