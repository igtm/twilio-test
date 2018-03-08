const accountSid = process.env.accountSid; // Your Account SID from www.twilio.com/console
const authToken = process.env.authToken;   // Your Auth Token from www.twilio.com/console
const from = process.env.from;   // Your Auth Token from www.twilio.com/console
const to = process.env.to;   // Your Auth Token from www.twilio.com/console

try {
    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.calls
        .create({
            url: 'http://demo.twilio.com/docs/voice.xml',
            to,
            from,
        })
        .then(call => process.stdout.write(call.sid));
}
catch(e) {
    console.log(e)
}