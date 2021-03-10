let name = conn.getName(m.sender)
let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Waalaikumsalam kak %name
`.trim(), m)
}
handler.help = ['']
handler.tags = ['']
handler.command = (Assalamualaikum)
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
