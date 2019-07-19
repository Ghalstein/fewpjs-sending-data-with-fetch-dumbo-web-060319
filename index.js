// Add your code here

const form = document.querySelector("#form");
const list = document.querySelector("#list");

function addUserID(user) {
	userInfo = document.createElement('li')
	userInfo.innerText = `${user.name} has an email of ${user.email} and an id of ${user.id}`
	list.append(userInfo);
}

function submitData(username, userEmail) {
	fetch('http://localhost:3000/users', {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		body: JSON.stringify({
			"name": username,
			"email": userEmail
		})
	})
	.then(resp => resp.json())
	.then(addUserID)
	.catch(error => {
		alert("You got an error!");
		console.log(error.message);
	})
}

form.addEventListener("submit", event => {
	event.preventDefault();
	submitData(event.target.username.value, event.target.email.value);
});