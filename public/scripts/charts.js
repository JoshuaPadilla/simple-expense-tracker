var xValues = ["Budget", "Expenses"];
var yValues = [55, 49];
var barColors = [
  "#B0EBB4",
  "#FF6969"
];

new Chart("myChart", {
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