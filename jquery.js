$(document).ready(function(){
	$('.numberHint').hover(function(){
		$(this).text('?');
	}, function(){
		$(this).text('Hint');
	});

	var inputArray = [];
	var inputLength = inputLength || 0;

	$('body').keyup(function(event) {
		if (event.which === 8) {
			inputLength = $('.numberInput').val().length;
			while (inputArray.length > inputLength) {
				inputArray.pop();
				console.log(inputArray);
			}
		}
	});

	$('body').keyup(function(event) {
		var temp;
		if (event.which >= 48 && event.which <= 57 && inputArray.length <= 10) {
			temp = String.fromCharCode(event.which);
			inputArray.push(parseInt(temp));
			inputLength++;
		}
	});
	
	$('#button0').click(function() {
		var value = $(this).text();
		var input = $('.numberInput');
		if (inputLength < 10) {
			input.val(input.val() + value);
			inputArray.push(0);
			inputLength++;
		}
	});

	$('#button1').click(function() {
		var value = $(this).text();
		var input = $('.numberInput');
		if (inputLength < 10) {
			input.val(input.val() + value);
			inputArray.push(1);
			inputLength++;
		}
	});

	$('#button2').click(function() {
		var value = $(this).text();
		var input = $('.numberInput');
		if (inputLength < 10) {
			input.val(input.val() + value);
			inputArray.push(2);
			inputLength++;
		}
	});

	$('#button3').click(function() {
		var value = $(this).text();
		var input = $('.numberInput');
		if (inputLength < 10) {
			input.val(input.val() + value);
			inputArray.push(3);
			inputLength++;
		}
	});

	$('#button4').click(function() {
		var value = $(this).text();
		var input = $('.numberInput');
		if (inputLength < 10) {
			input.val(input.val() + value);
			inputArray.push(4);
			inputLength++;
		}
	});

	$('#button5').click(function() {
		var value = $(this).text();
		var input = $('.numberInput');
		if (inputLength < 10) {
			input.val(input.val() + value);
			inputArray.push(5);
			inputLength++;
		}
	});

	$('#button6').click(function() {
		var value = $(this).text();
		var input = $('.numberInput');
		if (inputLength < 10) {
			input.val(input.val() + value);
			inputArray.push(6);
			inputLength++;
		}
	});

	$('#button7').click(function() {
		var value = $(this).text();
		var input = $('.numberInput');
		if (inputLength < 10) {
			input.val(input.val() + value);
			inputArray.push(7);
			inputLength++;
		}
	});

	$('#button8').click(function() {
		var value = $(this).text();
		var input = $('.numberInput');
		if (inputLength < 10) {
			input.val(input.val() + value);
			inputArray.push(8);
			inputLength++;
		}
	});

	$('#button9').click(function() {
		var value = $(this).text();
		var input = $('.numberInput');
		if (inputLength < 10) {
			input.val(input.val() + value);
			inputArray.push(9);
			inputLength++;
		}
	});							
});