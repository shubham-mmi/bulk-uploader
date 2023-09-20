let login_form_submit_btn = document.querySelector('#login-form-submit-btn');
let user_name_input = document.querySelector('#user-name-input');
let user_password_input = document.querySelector('#user-password-input');
// let user_avatar_text = document.querySelector('#user-avatar-text');


login_form_submit_btn.addEventListener("click", () => { handleLogin() })

function handleLogin() {
    let username = user_name_input.value;
    let password = user_password_input.value;
    console.log({ username, password });
    if (password == "mgis") {
        proceedToLogin(username, password);
    }

}

function proceedToLogin(username, password) {
    let currentPage = window.location.href;
    let appUrl = currentPage + `main.html?username=${username}`;
    window.location.href = appUrl;
}

function showUserAvatar(username) {
    user_avatar_text.innerHTML = username[0];
}
