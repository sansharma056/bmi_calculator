{
	let submitBtns = document.getElementsByClassName('submit')

	let weightMetric = document.getElementById('weightMetric');
	let heightMetric = document.getElementById('heightMetric');
	let resultMetric = document.getElementById('resultMetric');

	let weightStd = document.getElementById('weightStd');
	let heightStd = document.getElementById('heightStd');
	let resultStd = document.getElementById('resultStd');

	Array.from(submitBtns).forEach(function bindEventListenerTo(btn) {
		btn.addEventListener('click', function handleClick(e) {
			e.preventDefault();
			if(e.target.id == 'submitMetric') {
				if(isValid(weightMetric.value) && isValid(heightMetric.value)) {
					let bmiScore = calcBMI(weightMetric.value, heightMetric.value, 'metric');
					resultMetric.innerText = `Your BMI score is : ${bmiScore.toFixed(2)}`;
				}
			} else {
				if(isValid(weightMetric.value) && isValid(heightMetric.value)) {
					let bmiScore = calcBMI(weightStd.value, heightStd.value, 'standard');
					resultStd.innerText = `Your BMI score is : ${bmiScore.toFixed(2)}`;
				}
			}

		});
	});
}

function isValid(string) {
	//Remove spaces from the string if any
	string = string.replace(/\s/g, '');

	//Check if the string is empty and if it is a valid decimal number
	return string != '' && /^(\d*\.)?\d+$/.test(string);
}

function calcBMI(weight, height, unit) {
	if(unit == 'metric') {
		var result = weight/(height*height);
	} else {
		var result = (weight/(height*height))*703;
	}
	return result;
}