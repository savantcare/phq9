// This array stores all of the possible values and the weight associated with the value. 
var prompt_values1 = [
	{
		value_en: 'Not at all',
		value: 'Para nada',
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value_en: 'Several days',
		value: 'Varios dias',
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value_en: 'More than half the days',
		value: 'Más de la mitad de los días',
		class: 'btn-default',
		weight: 2
	},
	{
		value_en: 'Nearly every day',
		value: 'Casi todos los dias',
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

var prompt_values2 = [
	{
		value_en: 'Not difficult at all',
		value: 'Nada dificil',
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value_en: 'Somewhat difficult',
		value: 'Algo dificil',
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value_en: 'Very difficult',
		value: 'Muy dificil',
		class: 'btn-default',
		weight: 2
	},
	{
		value_en: 'Extremely difficult',
		value: 'Extremadamente difícil',
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// This is an array of objects that stores the PHQ9 questions that is prompted to the user and the weight for each prompt. 

var prompts = [
	{
		prompt_en: 'Over the last 2 weeks how often have you been bothered by any of the following problems... Feeling down, depressed, or hopeless?',
		prompt: 'Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado alguno de los siguientes problemas ... Se siente deprimido, deprimido o desesperado?',
		weight: 1,
		class: 'group0',
		values: prompt_values1
	},
	{
		prompt_en: 'Over the last 2 weeks how often have you been bothered by any of the following problems... Trouble falling or staying asleep, or sleeping too much?',
		prompt: 'Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado alguno de los siguientes problemas ... Dificultad para conciliar el sueño o permanecer dormido, o dormir demasiado?',
		weight: 1,
		class: 'group1',
		values: prompt_values1
	},
	{
		prompt_en: 'Over the last 2 weeks how often have you been bothered by any of the following problems... Feeling tired or having little energy?',
		prompt: 'Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado alguno de los siguientes problemas ... Se siente cansado o tiene poca energía?',
		weight: 1,
		class: 'group2',
		values: prompt_values1
	},
	{
		prompt_en: 'Over the last 2 weeks how often have you been bothered by any of the following problems... Poor appetite or overeating?',
		prompt: 'Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado alguno de los siguientes problemas ... Falta de apetito o comer en exceso?',
		weight: 1,
		class: 'group3',
		values: prompt_values1
	},
	{
		prompt_en: 'Over the last 2 weeks how often have you been bothered by any of the following problems...  Feeling bad about yourself -- or that you are a failure or have let yourself or your family down?',
		prompt: 'Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado alguno de los siguientes problemas ... Se siente mal consigo mismo, o que es un fracaso o se ha decepcionado a sí mismo oa su familia?',
		weight: 1,
		class: 'group4',
		values: prompt_values1
	},
	{
		prompt_en: 'Over the last 2 weeks how often have you been bothered by any of the following problems...  Trouble concentrating on things, such as reading newspapers or watching television?',
		prompt: 'Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado alguno de los siguientes problemas ... Problemas para concentrarse en cosas, como leer periódicos o mirar televisión?',
		weight: 1,
		class: 'group5',
		values: prompt_values1
	},
	{
		prompt_en: 'Over the last 2 weeks how often have you been bothered by any of the following problems...  Moving or speaking slowly that other could have noticed. Or the opposite -- being so figety or restless that you have been moving around a lot more than usual?',
		prompt: 'Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado alguno de los siguientes problemas? Moverse o hablar lentamente que otros podrían haber notado. O al contrario, ¿está tan nervioso o inquieto que se ha estado moviendo mucho más de lo habitual?',
		weight: 1,
		class: 'group6',
		values: prompt_values1
	},
	{
		prompt_en: 'Over the last 2 weeks how often have you been bothered by any of the following problems...  Thoughts that you would be better off dead, or of hurting yourself?',
		prompt: 'Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado alguno de los siguientes problemas ... Pensamientos de que estaría mejor muerto o de hacerse daño?',
		weight: 1,
		class: 'group7',
		values: prompt_values1
	},
	{
		prompt_en: 'If you have checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?',
		prompt: 'Si ha marcado algún problema, ¿qué tan difícil le han dificultado hacer su trabajo, ocuparse de las cosas en casa o llevarse bien con otras personas?',
		weight: 1,
		class: 'group8',
		values: prompt_values2
	}

]

var score_summary = [
	{
		lowerBound: 0,
		upperBound: 4,
		symptomSeverity_en: "Minimal or no depression\t",
		symptomSeverity: "Depresión mínima o nula\t",
		Comments_en: "Monitor; may not require treatment\r\n",
		Comments: "Monitor; puede que no requiera tratamiento\r\n"
	},
	{
		lowerBound: 5,
		upperBound: 9,
		symptomSeverity_en: "Mild depression\t",
		symptomSeverity: "Depresion ligera\t",
		Comments_en: "Use clinical judgment (symptom duration, functional impairment)\r\nto determine necessity of treatment\r\n",
		Comments: "Utilice el juicio clínico (duración de los síntomas, deterioro funcional) para determinar la necesidad de tratamiento.\r\n"
	},
	{
		lowerBound: 10,
		upperBound: 14,
		symptomSeverity_en: "Moderate depression",
		symptomSeverity: "Depresión moderada",
		Comments_en: "Use clinical judgment (symptom duration, functional impairment)\r\nto determine necessity of treatment",
		Comments: "Utilice el juicio clínico (duración de los síntomas, deterioro funcional) para determinar la necesidad de tratamiento."
	},
	{
		lowerBound: 15,
		upperBound: 19,
		symptomSeverity_en: "Moderately severe depression\t",
		symptomSeverity: "Depresión moderadamente severa\t",
		Comments_en: "Warrants active treatment with psychotherapy, medications, or combination\r\n",
		Comments: "Requiere un tratamiento activo con psicoterapia, medicamentos o una combinación\r\n"
	},
	{
		lowerBound: 20,
		upperBound: 27,
		symptomSeverity_en: "Severe depression\r\n",
		symptomSeverity: "Depresión severa\r\n",
		Comments_en: "Warrants active treatment with psychotherapy, medications, or combination\r\n",
		Comments: "Requiere un tratamiento activo con psicoterapia, medicamentos o una combinación\r\n"
	}
]


// For each prompt, create a list item to be inserted in the list group
function createPromptItems() {

	for (var i = 0; i < prompts.length; i++) {
		var prompt_li = document.createElement('li');
		var prompt_p = document.createElement('p');
		var prompt_text = document.createTextNode('Q' + (i + 1) + ') ' + prompts[i].prompt);

		prompt_li.setAttribute('class', 'list-group-item prompt');
		prompt_p.appendChild(prompt_text);
		prompt_li.appendChild(prompt_p);

		document.getElementById('screening').appendChild(prompt_li);
	}
}

// For each possible value, create a button for each to be inserted into each li of the screening
function createValueButtons() {
	for (var li_index = 0; li_index < prompts.length; li_index++) {
		var group = document.createElement('div');
		//group.className = 'btn-group btn-group-justified'; // By SB
		group.className = 'row'; // By SB
		var prompt_values = prompts[li_index].values;
		for (var i = 0; i < prompt_values.length; i++) {
			var btn_group = document.createElement('div');
			//btn_group.className = 'btn-group'; // By SB
			btn_group.className = 'col-md-3 col-sm-6'; // By SB

			var button = document.createElement('button');
			var button_text = document.createTextNode(prompt_values[i].value);
			button.className = 'group' + li_index + ' value-btn btn ' + prompt_values[i].class + ' width100';
			button.appendChild(button_text);

			btn_group.appendChild(button);
			group.appendChild(btn_group);

			document.getElementsByClassName('prompt')[li_index].appendChild(group);
		}
	}
}

createPromptItems();
createValueButtons();

// Keep a running total of the values they have selected. 
// Calculation will sum all of the answers to the prompts using weight of the value * the weight of the prompt.
var total = 0;
var emailSubject_en = 'Depression Score.';
var emailSubject = 'Puntuación de depresión.';
var emailBody = '';

// Get the weight associated to group number
function findPromptWeight(prompts, group) {
	var weight = 0;

	for (var i = 0; i < prompts.length; i++) {
		if (prompts[i].class === group) {
			weight = prompts[i].weight;
		}
	}

	return weight;
}

// Get the weight associated to the value
function findValueWeight(values, value) {
	var weight = 0;

	for (var i = 0; i < values.length; i++) {
		if (values[i].value === value) {
			weight = values[i].weight;
		}
	}

	return weight;
}

function findValueSet(groupName) {
	var groupArr = groupName.trim().split("group");
	var prompt_index = groupArr[1];
	var prompt_values = prompts[prompt_index].values;
	return prompt_values;
}


// When user clicks a value to agree/disagree with the prompt, display to the user what they selected
$('.value-btn').mousedown(function () {
	var classList = $(this).attr('class');
	// console.log(classList);
	var classArr = classList.split(" ");
	// console.log(classArr);
	var this_group = classArr[0];
	// console.log(this_group);

	var prompt_values = findValueSet(this_group);

	// If button is already selected, de-select it when clicked and subtract any previously added values to the total
	// Otherwise, de-select any selected buttons in group and select the one just clicked
	// And subtract deselected weighted value and add the newly selected weighted value to the total
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		//total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
		total -= findValueWeight(prompt_values, $(this).text());
	} else {
		// $('[class='thisgroup).prop('checked', false);
		//total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
		total -= findValueWeight(prompt_values, $('.' + this_group + '.active').text());
		// console.log($('.'+this_group+'.active').text());
		$('.' + this_group).removeClass('active');

		// console.log('group' + findValueWeight(prompt_values, $('.'+this_group).text()));
		// $(this).prop('checked', true);
		$(this).addClass('active');
		//total += (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
		total += findValueWeight(prompt_values, $(this).text());
	}

	console.warn(total);
})



$('#submit-btn').click(function () {
	// After clicking submit, add up the totals from answers
	// For each group, find the value that is active
	$('.results').removeClass('hide');
	$('.results').addClass('show');

	var symptomSeverity = '';
	var Comments = '';

	for (var i = 0; i < score_summary.length; i++) {
		if (score_summary[i].lowerBound <= total && total <= score_summary[i].upperBound) {
			symptomSeverity = score_summary[i].symptomSeverity;
			Comments = score_summary[i].Comments;
			break;
		}
	}

	document.getElementById('results').innerHTML = 'tu puntaje es : ' + total + '<br><b>' + symptomSeverity + '</b><br><br>' + Comments;

	emailBody_en = `Hi,\nRecently I have tested my Depression level in https://www.savantcare.com/phq9/ .\nMy depression score is '${total}' and level is: '${$.trim(symptomSeverity)}'.
	`;
	emailBody = `Hola,\nRecientemente probé mi nivel de depresión en https://www.savantcare.com/phq9/ .\nMi puntaje de depresión es '${total}' y el nivel es: '${$.trim(symptomSeverity)}'.
	`;

	// Hide the screening after they submit their results
	$('#screening').addClass('hide');
	$('#submit-btn').addClass('hide');
	$('#retake-btn').removeClass('hide');
	$('#share-by-email').removeClass('hide');
})

// Refresh the screen to show a new screening if they click the retake screening button
$('#retake-btn').click(function () {
	$('#screening').removeClass('hide');
	$('#submit-btn').removeClass('hide');
	$('#retake-btn').addClass('hide');
	$('#share-by-email').addClass('hide');

	$('.results').addClass('hide');
	$('.results').removeClass('show');
})

// Share score via email
function getMailtoUrl(to, subject, body) {
	if (typeof to === 'undefined' || to == '') return false;
	var args = [];
	if (typeof subject !== 'undefined') {
		args.push('subject=' + encodeURIComponent(subject));
	}
	if (typeof body !== 'undefined') {
		args.push('body=' + encodeURIComponent(body))
	}

	var url = 'mailto:' + encodeURIComponent(to);
	if (args.length > 0) {
		url += '?' + args.join('&');
	}
	return url;
}

$('#share-score-btn').click(function () {
	var to = $.trim($('#email').val());
	var body;
	var mailtoString = getMailtoUrl(to, emailSubject, emailBody);
	//console.log(emailBody);
	if (mailtoString !== false)
		window.open(mailtoString);
})