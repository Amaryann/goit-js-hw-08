import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");
const formEmailInput = form.querySelector("input[type='email']");
const formTextarea = form.querySelector("textarea");

form.addEventListener("input", throttle((()=>{
    let result = JSON.stringify({email: formEmailInput.value, textarea: formTextarea.value})
    localStorage.setItem("feedback-form-state", result);
}), 500))
window.addEventListener("load", ()=>{
    const localStorageData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (localStorageData !== null){
        formEmailInput.value = localStorageData["email"];
    formTextarea.value = localStorageData["textarea"];
    }
})
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(localStorageData);
    localStorage.clear();
    formEmailInput.value = "";
    formTextarea.value = "";
})
