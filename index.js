import express from "express";


const app = express();
const port = 3000;


const budget = [
    
];

const expense = [
    
];

const history = [

];


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {list: history});
    console.log(budget)
});

app.get("/add", (req, res) => {
    res.render("add.ejs");
});

app.post("/budget", (req, res) => {
    const date = new Date()
    const dateCreated = date.toLocaleDateString();
    const newBudget = req.body;
    newBudget.date = dateCreated;
    
    budget.push(newBudget);
    history.push(newBudget)
    res.redirect("/");
});

app.post("/expenses", (req, res) => {
    const date = new Date()
    const dateCreated = date.toLocaleDateString();
    const newExpenses = req.body;
    newExpenses.date = dateCreated;
    
    expense.push(newExpenses);
    expense.push(newExpenses)
    res.redirect("/");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
