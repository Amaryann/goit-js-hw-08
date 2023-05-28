const form = document.querySelector(".feedback-form");
const formEmailInput = form.querySelector("input[type='email']");
const formTextarea = form.querySelector("textarea");

form.addEventListener("input", ()=>{
    localStorage.setItem("feedback-form-state", `${formEmailInput.value} ${formTextarea.value}`);
})
document.addEventListener("load", ()=>{
    const localStorageFiles = localStorage.getItem("feedback-form-state").split(" ");
    if (localStorageFiles.length === 0){
        return
    }
    formEmailInput.value = localStorageFiles[0];
    formTextarea.value = localStorageFiles[1];
})
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const localStorageFiles = localStorage.getItem("feedback-form-state").split(" ");
    console.log({email: localStorageFiles[0], textarea: localStorageFiles[1]});
    localStorage.clear();
    formEmailInput.value = "";
    formTextarea.value = "";
})
