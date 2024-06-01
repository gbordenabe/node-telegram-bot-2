"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.botService = void 0;
const telegraf_1 = require("telegraf");
const filters_1 = require("telegraf/filters");
const botService = () => {
    const bot = new telegraf_1.Telegraf(process.env.TELEGRAM_KEY);
    bot.start((ctx) => ctx.reply('Welcome!'));
    bot.on((0, filters_1.message)('voice'), (ctx) => {
        ctx.reply('Audio received');
    });
    bot.command('ping', (ctx) => ctx.reply('Pong!'));
    bot.launch();
};
exports.botService = botService;
