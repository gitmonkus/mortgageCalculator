const principal = document.getElementById("principal");
const interest = document.getElementById("interest");
const length = document.getElementById("length");
const submit = document.getElementById("submit");
const total = document.getElementById("total");

submit.addEventListener("click", function () {
  if (principal.value > 0 && interest.value >= 0 && length.value > 0) {
    let p = principal.value;
    let r = interest.value / 100 / 12;
    let n = length.value * 12;

    let tot = (r * p) / (1 - (1 + r) ** -n);
    tot = Math.floor(tot);

    let string = tot.toString();
    let fish = string.length;

    // ADD comma in the monthly mortgage payment
    if (fish < 4) {
      total.textContent = `$${string}`;
    } else if (fish === 4) {
      total.textContent = `$${string[0]},${string.slice(-3)}`;
    } else if (fish === 5) {
      total.textContent = `$${string[0]}${string[1]},${string.slice(-3)}`;
    } else {
      total.textContent = ` Not worth it!`;
    }
  }
});
