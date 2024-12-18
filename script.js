const password = document.getElementById("password");
const message = document.getElementById("message");
const strenght = document.getElementById("strenght");
const submitButton = document.getElementById("submitButton");
const currentDateTime = document.getElementById("currentDateTime");

// Aktualizace času a datumu
function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("cs-CZ", {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedTime = now.toLocaleTimeString("cs-CZ", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    currentDateTime.textContent = `${formattedDate}, ${formattedTime}`;
}

// Spuštění funkce na interval
setInterval(updateDateTime, 1000);
updateDateTime();

password.addEventListener("input", function () {
    const passwordValue = password.value;
    const passwordLength = passwordValue.length;

    let strenghtValue = '';

    if (passwordLength === 0) {
        strenghtValue = '';
    } else if (passwordLength < 6) {
        strenghtValue = 'Weak';
    } else if (passwordLength < 10) {
        strenghtValue = 'Medium';
    } else {
        strenghtValue = 'Strong';
    }

    strenght.textContent = strenghtValue;
    message.style.display = "block";
});

submitButton.addEventListener("click", function () {
    const passwordType = password.getAttribute('type');

    if (passwordType === 'password') {
        password.setAttribute('type', 'text');
    } else {
        password.setAttribute('type', 'password');
    }
});
