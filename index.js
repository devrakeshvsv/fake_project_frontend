const URL = 'http://localhost:8000/post';

function sendMessage(e) {
	e.preventDefault();
	const person = {};

	person.firstName = document.getElementById('fName').value;
	person.lastName = document.getElementById('lName').value;

	if (person.firstName && person.lastName) {
		fetch(URL, {
			method: 'POST',
			body: JSON.stringify(person),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then(({ message }) => {
				document.getElementById('form').style.display = 'none';
				document.getElementById('numeric_score').innerText = message;
				document.getElementById('score').style.display = 'block';
				setTimeout(() => {
					document.getElementById('form').style.display = 'block';
					document.getElementById('score').style.display = 'none';
				}, 5000);

				console.log(message);
			});

		document.getElementById('fName').value = '';
		document.getElementById('lName').value = '';
	} else {
		alert('Enter Your and Crush Name!!');
	}
}
