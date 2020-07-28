var Twit = require( 'twit' )
const SendMessage = require('../slack/index').SendMessage
let config;

//Initiate Twit
if ( process.env.NODE_ENV !== 'production' ) {
    config = require( './config' )
   
} else {
    config = {
        consumer_key: process.env.consumer_key,
        consumer_secret: process.env.consumer_secret,
        access_token: process.env.access_token,
        access_token_secret: process.env.access_token_secret,
    }
}

var T = new Twit( config )


//Filters based on parameter
const filter = () => {
    

    var stream = T.stream( 'statuses/filter', { track: ['nodejs developer','nodejs engineer','back end engineer', 'software engineer', 'software developer','software engineering intern','back end engineer intern', 'software developer hire', 'software engineer hire' ] } )

    stream.on( 'message', function ( tweet ) {
        

        if ( tweet.extended_tweet && tweet.lang ===  'en') {
            var data = {
                screen_name: `@${ tweet.user.screen_name }`,
                text: `${ tweet.extended_tweet.full_text }`,
                location: `${tweet.user.location}`
            }
            console.log(data.location)
            //Send It to me on whatsapp
            // SendMessage( data )
            // console.log(tweet)
        } else {
            // console.log(tweet)
         
           
            
       }
        
        
        
    } )

}
filter()
module.exports = {filter}