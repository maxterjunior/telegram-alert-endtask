#!/usr/bin/env node
const { program } = require('commander');
const { Telegraf } = require('telegraf');
// require('dotenv').config();

// BOT_TOKEN = '5401509390:AAFYStFe38EL0z_BESBxqFKAjbhJdh59ej8'
// CHAT_ID = 1526068590

// console.log('Token::',process.env.TELEGRAM_BOT_TOKEN)
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)
// const bot = new Telegraf(BOT_TOKEN)

program.version('0.0.1').description('CLI for alert telegram bot');

program.command('alert <mensaje>').action((mensaje) => {
    try {
        // console.log({ mensaje })
        bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID, mensaje);
        // bot.telegram.sendMessage(CHAT_ID, mensaje);
    } catch (error) {
        console.log(error);
    }
})

program.command('start').action(() => {
    bot.start(ctx => ctx.reply(`Welcome ${ctx.from.first_name}: ${ctx.chat.id}`))
    bot.launch()
})

program.parse(process.argv);
