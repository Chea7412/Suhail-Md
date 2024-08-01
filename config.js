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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254745294543";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_12_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc5LFxuICAgICAgICAyNixcbiAgICAgICAgNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxODUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUzLFxuICAgICAgICAyNixcbiAgICAgICAgMjE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDQyLFxuICAgICAgICA4NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDgyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NCxcbiAgICAgICAgOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIwLFxuICAgICAgICA1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDksXG4gICAgICAgIDUsXG4gICAgICAgIDE5LFxuICAgICAgICA3OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDgzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWGdWeGVtRWgyWmVsZDJHbkFpSTliU1M1RFQ1d1pXYUF1YzlTeWd3ZGRhWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibVYxQkpGSVNTWC1oZ1RoNkt0b3dCUVwiLFxuICBcInBob25lSWRcIjogXCIyOGI4Y2FkMy1iZGZlLTQ4NDQtYTYyZS1iYzZhYjNhZWMyODFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMTE3LFxuICAgICAgOTQsXG4gICAgICAxODUsXG4gICAgICAxMDIsXG4gICAgICAyNDYsXG4gICAgICA5OCxcbiAgICAgIDM3LFxuICAgICAgMTE0LFxuICAgICAgMjQwLFxuICAgICAgNzMsXG4gICAgICAxMTYsXG4gICAgICAxMjksXG4gICAgICAzMyxcbiAgICAgIDE0MixcbiAgICAgIDI0NSxcbiAgICAgIDIzNCxcbiAgICAgIDIyNCxcbiAgICAgIDUxLFxuICAgICAgMTEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDEzNCxcbiAgICAgIDU0LFxuICAgICAgMTQsXG4gICAgICAxNTIsXG4gICAgICAxODMsXG4gICAgICA1NSxcbiAgICAgIDEzMCxcbiAgICAgIDIwMyxcbiAgICAgIDEwNyxcbiAgICAgIDE2MSxcbiAgICAgIDIwLFxuICAgICAgMTc1LFxuICAgICAgNDIsXG4gICAgICA4MCxcbiAgICAgIDE0NSxcbiAgICAgIDI0NCxcbiAgICAgIDMyLFxuICAgICAgMTU4LFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpERVZUTUdNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDUyOTQ1NDM6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZW0J/CdlpJf8J2VrvCdlo3wnZaK8J2WhlwiLFxuICAgIFwibGlkXCI6IFwiMTU5MDA0MjUyNzI5NTkwOjU5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lXQ2pzd0NFTnJxckxVR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY0dha3liZE1UcGpjbENiK1E2OUdhQlI4YTdkQzlxelpRZkdycVlubkdsVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZdGlvMWdHOU5jdE9SZDlVOXRSTG42cHVHcE90Vi9ldzVqM1Iva0FqTGl0WVdkZTlJVHFNdmEzbitKWDRjTENRbG9iZmo0em1jMlFFSzF5MVNXVzJBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3emswRTJUQi96L3VlVWJCblY1aXBMSVdNdW40aHVuVVRCVDFCdTdxbVkwMkw4TGJOUlgySHlBZnpDME95WGduVndqTGdOM1ZNVnZoSUgzTGZzQ3Rqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDUyOTQ1NDM6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQ5NjM1MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNYRFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1hELmpzb24iOiAie1wia2V5RGF0YVwiOlwiNW5GZ3U1ZldDU1MxOEdzWHZhbFBEa0FFOXN0YTM1VXc5eko4czQvR2VmRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTY0ODQwOTksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
