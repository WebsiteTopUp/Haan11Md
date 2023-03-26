const fs = require('fs')
const chalk = require('chalk')


exports.sewabot = (prefix, gayas) => {
return `
*Sewa Bot*

${gayas} 1 Minggu: 7K
${gayas} 1 Bulan: 20K
${gayas} Permanen: -

Jika ingin sewabot silakah
Lanjut klik tombol Owner/All Qr
*Owner* : Untuk menghubungi atau
tanya tanya selengkapnya tentang bot WhatsApp ini
*All Qr* : Untuk Melakukan Pembayaran Dan Wajib Kirim Bukti Ke Owner
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
