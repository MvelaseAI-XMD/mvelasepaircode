const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: MVELASE_MD,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function MVELASE_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Mvelase_MD = Mvelase_MD({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Mvelase_MD.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Mvelase_MD.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Mvelase_MD.ev.on('creds.update', saveCreds)
            Pair_Code_By_Mvelase_MD.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Mvelase_MD.user.id, { text: '' + b64data });

               let MVELASE_MD_TEXT = `
┏───━━━━────━━━━┉⚆
┃⸔Mᴠᴇʟᴀsᴇ-ᴍᴅ Sᴇssɪᴏɴ Is
┃⸔SᴜᴄᴄᴇssFᴜʟʟʏ
┃⸔Cᴏɴɴᴇᴄᴛᴇᴅ ⛔✅
┗───━━━━────━━━━┉⚆
┎───━━━━────━━━━┉⚆
┃→ Oᴡɴᴇʀ ↝ Kʜᴜʟᴇᴋᴀɴɪ Dᴜʙᴇ
┃
┃→ Oᴡɴᴇʀ Aᴄᴄᴏᴜɴᴛ ↝ https://wa.me/263711337094
┃
┃→ Mᴠᴇʟᴀsᴇ ᴍᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ
┖───━━━━────━━━━┉⚆
©*2025-2099 ᴍᴠᴇʟᴀsᴇ-ᴍᴅ*`

 await Pair_Code_By_Mvelase_MD.sendMessage(Pair_Code_By_Mvelase_MD.user.id,{text:MVELASE_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Mvelase_MD.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    MVELASE_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await MVELASE_MD_PAIR_CODE()
});
module.exports = router
