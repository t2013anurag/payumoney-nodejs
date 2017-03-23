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
		var key = 'tqB2AthR';
		var salt = 'j5OQnEG6bt';

		var text = "";
		var length = 10; // 10 digits random transaction ID.
    	var sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    	for(var i = 0; i < length; i++) {
        	text += sample.charAt(Math.floor(Math.random() * sample.length));
    	}
    	// console.log(text);
    	
	}
};

