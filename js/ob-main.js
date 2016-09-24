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