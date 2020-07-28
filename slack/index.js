const SlackBot = require( 'slackbots' );
let token;

if ( process.env.NODE_ENV !== 'production' ) {
    token = require('./keys').token
}
const bot = new SlackBot( {
    token,
    name: 'bot'
    
} );


//SendMessage To Channel

console.log('from send')
const SendMessage = (data) => {
    // bot.on( 'start', () => {
        var params = {
            icon_emoji: ':teamwork:'
    };
    let location = data.location !== null || data.location !== '' || data.location !== undefined ? data.location : 'Not Available'
    const message =`User: ${data.screen_name} \n\nTweet: ${data.text} \n\nLocation: ${location}`
    console.log('from send')
        bot.postMessageToChannel('general', `${message}`, params)
    // })
}


module.exports = {SendMessage}