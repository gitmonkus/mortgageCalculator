// DOM connector
const principal = document.getElementById("principal");
const interestRate = document.getElementById("interest");
const lengthOfLoan = document.getElementById("length");
const mortgageCalculator = document.getElementById("mortgage-calculator");
const totalTextContent = document.getElementById("total");

mortgageCalculator.addEventListener("submit", function (event) {
  // Don't reset the form on submit
  event.preventDefault();

  // If principal or length are 0, don't waste the cycles
  if (principal.value == 0 || lengthOfLoan.value == 0) {
    return;
  }

  // Now we can work with something
  const principalAmount = principal.value;
  const monthlyInterestRate = interestRate.value / 100 / 12;
  const totalPayments = lengthOfLoan.value * 12;
  let monthlyMortgagePayment = 0;

  if (interestRate.value == 0) {
    monthlyMortgagePayment = principalAmount / totalPayments;
  } else {
    monthlyMortgagePayment =
      (monthlyInterestRate * principalAmount) /
      (1 - (1 + monthlyInterestRate) ** -totalPayments);
  }

  monthlyMortgagePayment = monthlyMortgagePayment.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  totalTextContent.textContent = monthlyMortgagePayment;
});
