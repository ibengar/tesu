let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  await conn.reply(m.chat, mess.wait, 0, { thumbnail: await(await fetch(ext.thum)).buffer(), contextInfo: {
                  externalAdReply: {
                    mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
                    title: ext.title,
                    body: ext.body,
                    thumbnail: await(await fetch(ext.thum)).buffer()
                   }
                 }
               }
           )
  let res = `https://api.lolhuman.xyz/api/textprome2/pornhub?text1=${response[0]}&text2=${response[1]}&apikey=cd7227d604d7acca5d19b4cc`
  conn.sendFile(m.chat, res, 'phlogo.jpg', mess.sukses, m, false)
}
handler.help = ['phlogo4'].map(v => v + ' <text|text>')
handler.tags = ['nulis']
handler.command = /^(phlogo4)$/i

module.exports = handler
