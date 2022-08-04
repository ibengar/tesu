let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(`_*「  WAITING  」* Perintah Kak ${conn.getName(m.sender)} Sedang Di Proses_`)
  let res = `https://api.xteam.xyz/randomimage/hentai?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'hentai.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['hentai3', 'waifu18'].map(v => v + ' ')
handler.tags = ['premium']

handler.command = /^(hentai3|waifu18)$/i
handler.owner = false
handler.premium = true

module.exports = handler
