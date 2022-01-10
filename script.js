const principal = document.getElementById("principal");
const interest = document.getElementById("interest");
const length = document.getElementById("length");
const mortgageCalculator = document.getElementById("mortgage-calculator");
const total = document.getElementById("total");

mortgageCalculator.addEventListener("submit", function (event) {
  event.preventDefault();
  const principalAmount = principal.value;
  const monthlyInterestRate = interest.value / 100 / 12;
  const totalPayments = length.value * 12;

  let monthlyMortgagePayment =
    (monthlyInterestRate * principalAmount) /
    (1 - (1 + monthlyInterestRate) ** -totalPayments);
  monthlyMortgagePayment = monthlyMortgagePayment.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  total.textContent = monthlyMortgagePayment;
});
