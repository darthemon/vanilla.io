const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(mandoo) {
    mandoo.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting();
}

function paintGreeting() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hi! ${username}! you're welcome!`;
    greeting.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting();
}

function localReset() {
    localStorage.removeItem(USERNAME_KEY);
}
document.querySelector("#localName-reset").addEventListener("submit", localReset);