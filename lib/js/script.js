$('#valid_receipt_btn').click( function(){
		$('#valid_receipt_btn').fadeOut(500, function() { $(this).remove(); });
		$('#invalid_receipt_btn').fadeOut(500, function() { $(this).remove();});

		//show the receipt-table
		$('#receipt-input-form').load('http://cs.umd.edu/~majeed/InclusiveMicroTasks/resources/receipt_table.html').hide().fadeIn(750);
});

$('#invalid_receipt_btn').click( function(){
		$('#valid_receipt_btn').fadeOut(300, function() { $(this).remove(); });
		$('#invalid_receipt_btn').fadeOut(300, function() { $(this).remove(); });
});
