const { info } = require('console');
var nodemailer =require('nodemailer');

var transporter =nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'asdasdasd.com',
        pass:'asdasd'
    }
});

var mailOptions ={
    from:'asdasd',
    to:'asdasd',
    subject:'Sent mail Using node',
    text:'Its easy!'
};

transporter.sendMail(mailOptions,funnction(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent:'+info.response);

    }
}};

