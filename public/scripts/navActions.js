
const home = document.getElementById("home");

home.addEventListener("click", () => {
    createForm("home-form", "/", "GET");
    document.getElementById("home-form").submit();
});


function createForm(formID, action, method) {
    const form = document.createElement('form');
    form.setAttribute('id', formID);
    form.setAttribute('action', action);
    form.setAttribute('method', method);

    form.style.display = 'none';

    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'button');
    submitBtn.setAttribute('id', 'submitBtn');
    submitBtn.textContent = 'Submit';

    form.appendChild(submitBtn);

    document.body.appendChild(form);
}