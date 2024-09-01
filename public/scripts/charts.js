var xValues = ["Budget", "Expenses"];
var yValues = [1, 0];
var barColors = [
  "#B0EBB4",
  "#FF6969"
];

new Chart("pieChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Budget and Expenses"
    }
  }
});
