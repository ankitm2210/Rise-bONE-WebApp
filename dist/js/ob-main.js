/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
$( document ).ready(function() {
	console.log("fetching value for ob")
    var accountDate ={
    	"balance":"100",
    	"rewards":"200",
    	"transactions":"500",
    	"liabilities":"500",
    }
    $('#ob-balance').html(accountDate.balance);
    $('#ob-rewards').html(accountDate.rewards);
    $('#ob-transactions').html(accountDate.transactions);
    $('#ob-liabilities').html(accountDate.liabilities);
});