const axios = require("axios");

module.exports = {
  name: "withflowers",
  alias: ["nsfwwithflowers"],
  desc: "Hentai picture of waifu with flowers",
  category: "Nsfw",
  usage: `withflowers`,
  react: "👹",
  start: async (Miku, m, { prefix, NSFWstatus }) => {

    if (NSFWstatus == "false") return m.reply(`This group is not NSFW enabled!\n\nTo configure NSFW mode, type:\n\n*${prefix}nsfw*`);
    m.reply(mess.waiting)
    let buff = await axios.get(`https://fantox-apis.vercel.app/withflowers`)
    let imgURL = buff.data.url


    let Button = [
      {
        buttonId: `${prefix}nsfwmenu`,
        buttonText: { displayText: `NSFW Menu` },
        type: 1,
      },
      {
        buttonId: `${prefix}withflowers`,
        buttonText: { displayText: `⏩💦` },
        type: 1,
      },
    ];
    let bmffg = {
      image: { url: imgURL },
      caption: `\n* Here What you are looking for 👀..*\n`,
      footer: `*${botName}*`,
      buttons: Button,
      headerType: 4,
    };

    await Miku.sendMessage(m.from, bmffg, { quoted: m }).catch((err) => {
      return "Error!";
    });
  },
};
