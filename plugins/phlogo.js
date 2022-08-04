let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
    response = args.join(' ').split('|')
    if (!args[0]) throw 'Masukkan Parameter'
    m.reply('*[ ❗ ] Wait,Proses...*')
    let res = `https://api.lolhuman.xyz/api/textprome2/pornhub?apikey=cd7227d604d7acca5d19b4cc&text1=${response[0]}&text2=${response[1]}`
    conn.sendFile(m.chat, res, 'bpink.jpg', `Nih kak`, m, false)
}
handler.help = ['phlogo'].map(v => v + ' <text|text>')
handler.tags = ['sticker']
handler.command = /^(phlogo)$/i
handler.limit = true
handler.premium = true
module.exports = handler

