const form = document.querySelector(".feedback-form");
const formEmailInput = form.querySelector("input[type='email']");
const formTextarea = form.querySelector("textarea");

form.addEventListener("input", ()=>{
    let result = JSON.stringify({email: formEmailInput.value, textarea: formTextarea.value})
    localStorage.setItem("feedback-form-state", result);
})
window.addEventListener("load", ()=>{
    const localStorageData = JSON.parse(localStorage.getItem("feedback-form-state"));
    formEmailInput.value = localStorageData.email;
    formTextarea.value = localStorageData.textarea;
})
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(localStorageData);
    localStorage.clear();
    formEmailInput.value = "";
    formTextarea.value = "";
})
