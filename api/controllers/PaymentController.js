/**
 * PaymentController
 *
 * @description :: Server-side logic for managing payments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 * @author		:: Anurag Tiwari (tiwari.anurag126@gmail.com)
 */

module.exports = {
	'index' : function(req, res) {

		/* the test params */
		var key = 'kgJ4kDdQ';
		var salt = 'wsU5ER4p7J';

		var txnid = "";
		var length = 10; // 10 digits random transaction ID.
    	var sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    	for(var i = 0; i < length; i++) {
        	txnid += sample.charAt(Math.floor(Math.random() * sample.length));
    	}
    	// console.log(txnid);

    	var amount = 10;
    	var productinfo = 'someinfo';
    	var firstname = 'Anurag';
    	var email = 'tiwari.anurag126@gmail.com';
    	var phone = '9999111111';

    	// The surl and furl are the success and the failure url's. Change accordingly.
    	var surl = 'http://localhost.com:1337/Payment/success';
    	var furl = 'http://localhost.com:1337/Payment/failure';

    	// string hash format
    	var str = key + '|' + txnid + '|' + amount + '|' + productinfo + '|' + firstname + '|' + email + '|' +
		'||||||||||' + salt;
		// console.log(str);

		var hash = require('crypto').createHash('sha512').update(str).digest('hex');
		// console.log(hash);

		var service_provider = 'payu_paisa';

		var formData = {
			'key' : key,
			'txnid' : txnid,
			'amount' : amount,
			'productinfo' : productinfo,
			'firstname' : firstname,
			'email' : email,
			'phone' : phone,
			'surl' : surl,
			'furl' : furl,
			'hash' : hash,	
			'service_provider' : service_provider
		}

		// Note - PayUMoney Server only accepts request in form type data.
		var request = require('request');
		request.post('https://test.payu.in/_payment', {form: formData}, function(err, response, body) {
			var location = response.caseless.dict.location;
			res.redirect(location);
		});
	}
};

