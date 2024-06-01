import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';

export const botService = () => {
  const bot = new Telegraf(process.env.TELEGRAM_KEY!);

  bot.start((ctx) => ctx.reply('Welcome!'));

  bot.on(message('voice'), (ctx) => {
    ctx.reply('Audio received');
  });

  bot.command('ping', (ctx) => ctx.reply('Pong!'));

  bot.launch();
};
