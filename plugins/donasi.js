let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Shopeepay [081313994677]
│ • Telkomsel [081313994677]
│ • Gopay [081313994677]
│ • Dana [081282703695]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? http://wa.me/6282164412895
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa telkomsel"
3.)Dan terus masukkan nomor kami 081313994677
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
