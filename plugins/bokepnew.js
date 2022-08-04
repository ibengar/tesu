let handler = async (m) => {
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih Jangan Sagne Bang', m)
}
handler.help = ['bokepnew']
handler.tags = ['premium']
handler.premium = false
handler.command = /^(bokepnew)$/i
handler.limit = 3
handler.premium = true
module.exports = handler