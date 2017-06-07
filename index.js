const Telegraf = require('telegraf');

const app = new Telegraf(process.env.BOT_TOKEN);
app.command('start', ({from, reply}) => {
    console.log('start', from);
    let language = from.language_code.split('-')[0];

    if (language.toLowerCase() === 'it') {
        return reply('Ciao!');
    } else {
        return reply('Welcome!');
    }

});
app.hears('hi', (ctx) => ctx.reply('Hey there!'));
app.hears('CIAONE', (ctx) => ctx.reply('PRONTONE'));
app.on('sticker', (ctx) => ctx.reply('👍'));
app.startPolling();