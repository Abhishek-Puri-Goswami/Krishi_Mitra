document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = form.querySelector("input[name='email']");

    // 1. Pre-fill input if cookie is found
    const savedEmail = getCookie("email");
    if (savedEmail) {
        emailInput.value = savedEmail;
    }

    // 2. Save email to cookie on form submit
    form.addEventListener("submit", () => {
        const email = emailInput.value;
        document.cookie = `email=${encodeURIComponent(email)}; path=/; max-age=${7 * 24 * 60 * 60}`;
    });
});

// 3. Helper function to get a cookie value by name
function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(nameEQ)) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}
