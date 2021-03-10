let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `Waalaikumsalam`.trim(), m)
}
handler.help = ['Assalamualaikum']
handler.tags = ['kepo']
handler.command = Assalamualaikum
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
