const secretCode = ['divu', 'sonu', 'divyani']; // Replace with your secret code
const nextPageUrl = 'main.html'; // Replace with the URL of the new page

const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();
	if (secretCodes.includes(userInput)) {
		resultDiv.innerHTML = 'Baby';
		window.location.href = nextPageUrl; // Redirect to new page
	} else {
		resultDiv.innerHTML = 'Naa Tum mera babada nhi hoo kon hooo tum kaha hai mera babada';
	}
});
