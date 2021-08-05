document.addEventListener("DOMContentLoaded", function(event) {
    const mainForm = document.querySelector('#main-form');
    const submitHandler = () => {
        const inputElement = document.createElement("input");
        const lastInput = document.getElementsByTagName('input')[document.getElementsByTagName('input').length - 1]
        inputElement.value = lastInput.value === '555' ? '---' :  lastInput.value
        mainForm.append(inputElement)
    }
    mainForm.addEventListener('submit', (event) =>{
        event.preventDefault();
        submitHandler();
    })
});