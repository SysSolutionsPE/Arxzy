/*
   * Created By ArxzyDev
   * Contact https://wa.me/6289513081052
   
   * Mau Hapus? Mau Ubah? Neraka Nunggu Lu
   * Jual? Neraka Nunggu Lu
   
   * Notes:
    > Jangan Lupa Solat Bagi Agama Islam
    > Jangan Lupa Berbagi Kepada Sesama Manusia
   
   * Imam Ibnul Jauzi Berkata 
    >"Barangsiapa yang senang amalnya tidak terputus
    > setelah wataf, maka hendaklah ia menyebarkan ilmu"
   
   * Pake Sc Error? Join Saja Disini
   > https://chat.whatsapp.com/LfBvDxQujrLHihSRI6TCIZ
   > https://chat.whatsapp.com/LfBvDxQujrLHihSRI6TCIZ
   > https://chat.whatsapp.com/LfBvDxQujrLHihSRI6TCIZ
   
   
   * Mau Beli VPS? Panel? Chat Saja
   089513081052
   A/N
   ArxzyDev
*/

const fs = require('fs')
const chalk = require('chalk')

/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.lol = '' // https://api.lolhuman.xyz
global.xzn = '' // https://xzn.wtf
/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = '6289513081052'
global.owner = ['6289513081052']
global.namaowner = 'Arxzy お-ぎ'
global.premium = ["6289513081052"]
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = 'Arxzy-MD'
global.autoread = false
global.autobio = false
global.autoblok212 = true
global.onlyindo = false
global.packname = 'Created By'
global.author = 'Arxzy ダ'
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
    done: 'Done ✅',
    prem: 'Feature Only For User _*PREMIUM*_',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Private Chat*_',
    wait: 'Wait a Moment, for Process',    
    error: '_*Sorry Features Error*_',
}
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync('./media/thumbnail.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = 'https://profile.arxzydev.xyz'
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})