
const addOption = document.querySelectorAll(".option");
const budgetForm = document.querySelector(".budget");
const expenseForm = document.querySelector(".expense");

addOption.forEach((item) => {
    item.addEventListener("click", function(){
        let className = "hide";
        let budget = addOption[0];
        let expense = addOption[1];
        if (this.innerHTML === "Budget") {
            addClass(expenseForm, className);
            removeClass(budgetForm, className);
            addClass(budget, "active");
            removeClass(expense, "active");
        } 

        if (this.innerHTML === "Expenses") {
            addClass(budgetForm, className);
            removeClass(expenseForm, className);
            addClass(expense, "active");
            removeClass(budget, "active");
        }
    });
});


function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}