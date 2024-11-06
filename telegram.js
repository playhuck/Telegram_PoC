const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config();

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {

   const chatId = msg.chat.id;

   if (msg.text.toString().toLowerCase() === 'get api key') { 

      bot.sendMessage(chatId, 'API KEY는 전송 안됩니다.');

   }

});