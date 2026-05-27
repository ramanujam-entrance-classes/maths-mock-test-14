const user = JSON.parse(localStorage.getItem("mocktest_user"));

if (!user) {
    window.location.href = "login.html";
}
