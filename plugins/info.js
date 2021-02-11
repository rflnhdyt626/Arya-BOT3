let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Script: @Nurotomo
Github: -

*Thanks To :*
Drawlnag
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Shopeepay : 081313994677
╠➥ Tsel : 081313994677
╠➥ Gopay : 081313994677
╠➥ Dana : 081282703695
║>Request? http://wa.me/6282164412895
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

