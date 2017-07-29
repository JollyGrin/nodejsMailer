var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport ({
	service: 'gmail',
	secure: false,
	port: 25,
	auth: {
		user: '',
		pass: ''
	},
	tls: {
		rejectUnauthorized: false
	}
});

let HelperOptions = {
	from: '"NestEgg Test" <test@nestegg.eu>',
	to: 'info@nestegg.eu',
	cc: 'big@big.com',
	subject: 'Hello World',
	text: 'Wow this works'
};

transporter.sendMail(HelperOptions, (error, info) => {
	if(error){
		return console.log(error);
	} 
	console.log("Success");
	console.log(info);
});