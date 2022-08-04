let limit = 10
let handler = async (m, { conn, text }) => {
if (!text) throw '_Textnya mana tod_'
let [kiri, kanan] = text.split('|')
await conn.sendFile(m.chat, global.API('https://api.lolhuman.xyz', '/api/phlogo', {
 text1: kiri,
 text2: kanan,
 theme: 'phlogo',
 apikey: 'cd7227d604d7acca5d19b4cc'
}), 'Error', '_ini hasil dari phlogo nya sayang love you😘_', m)
}
handler.help = ['phlogo3 <text>']
handler.tags = ['nulis']
handler.command = /^phlogo3$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
