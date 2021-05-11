// This array stores all of the possible values and the weight associated with the value. 
var prompt_values1 = [
	{
		value: 'Not at all',
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: 'Several days',
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: 'More than half the days',
		class: 'btn-default',
		weight: 2
	},
	{
		value: 'Nearly every day',
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

var prompt_values2 = [
	{
		value: 'Not difficult at all',
		class: 'btn-default btn-strongly-agree',
		weight: 0
	},
	{
		value: 'Somewhat difficult',
		class: 'btn-default btn-agree',
		weight: 1
	},
	{
		value: 'Very difficult',
		class: 'btn-default',
		weight: 2
	},
	{
		value: 'Extremely difficult',
		class: 'btn-default btn-disagree',
		weight: 3
	}
]

// This is an array of objects that stores the PHQ9 questions that is prompted to the user and the weight for each prompt. 

var prompts = [
	{
		prompt: 'Over the last 2 weeks how often have you been bothered by any of the following problems... Feeling down, depressed, or hopeless?',
		weight: 1,
		class: 'group0',
		values: prompt_values1
	},
	{
		prompt: 'Over the last 2 weeks how often have you been bothered by any of the following problems... Trouble falling or staying asleep, or sleeping too much?',
		weight: 1,
		class: 'group1',
		values: prompt_values1
	},
	{
		prompt: 'Over the last 2 weeks how often have you been bothered by any of the following problems... Feeling tired or having little energy?',
		weight: 1,
		class: 'group2',
		values: prompt_values1
	},
	{
		prompt: 'Over the last 2 weeks how often have you been bothered by any of the following problems... Poor appetite or overeating?',
		weight: 1,
		class: 'group3',
		values: prompt_values1
	},
	{
		prompt: 'Over the last 2 weeks how often have you been bothered by any of the following problems...  Feeling bad about yourself -- or that you are a failure or have let yourself or your family down?',
		weight: 1,
		class: 'group4',
		values: prompt_values1
	},
	{
		prompt: 'Over the last 2 weeks how often have you been bothered by any of the following problems...  Trouble concentrating on things, such as reading newspapers or watching television?',
		weight: 1,
		class: 'group5',
		values: prompt_values1
	},
	{
		prompt: 'Over the last 2 weeks how often have you been bothered by any of the following problems...  Moving or speaking slowly that other could have noticed. Or the opposite -- being so figety or restless that you have been moving around a lot more than usual?',
		weight: 1,
		class: 'group6',
		values: prompt_values1
	},
	{
		prompt: 'Over the last 2 weeks how often have you been bothered by any of the following problems...  Thoughts that you would be better off dead, or of hurting yourself?',
		weight: 1,
		class: 'group7',
		values: prompt_values1
	},
	{
		prompt: 'If you have checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?',
		weight: 1,
		class: 'group8',
		values: prompt_values2
	}

]

var score_summary = [
	{
		lowerBound: 0,
		upperBound: 4,
		symptomSeverity: "Minimal or no depression\t",
		Comments: "Monitor; may not require treatment\r\n"
	},
	{
		lowerBound: 5,
		upperBound: 9,
		symptomSeverity: "Mild depression\t",
		Comments: "Use clinical judgment (symptom duration, functional impairment)\r\nto determine necessity of treatment\r\n"
	},
	{
		lowerBound: 10,
		upperBound: 14,
		symptomSeverity: "Moderate depression",
		Comments: "Use clinical judgment (symptom duration, functional impairment)\r\nto determine necessity of treatment"
	},
	{
		lowerBound: 15,
		upperBound: 19,
		symptomSeverity: "Moderately severe depression\t",
		Comments: "Warrants active treatment with psychotherapy, medications, or combination\r\n"
	},
	{
		lowerBound: 20,
		upperBound: 27,
		symptomSeverity: "Severe depression\r\n",
		Comments: "Warrants active treatment with psychotherapy, medications, or combination\r\n"
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
var emailSubject = 'Depression Score.';
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

	document.getElementById('results').innerHTML = 'Your score is : ' + total + '<br><b>' + symptomSeverity + '</b><br><br>' + Comments;

	emailBody = `Hi,\nRecently I have tested my Depression level in https://www.savantcare.com/phq9/ .\nMy depression score is '${total}' and level is: '${$.trim(symptomSeverity)}'.
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