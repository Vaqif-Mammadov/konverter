const select = document.querySelectorAll(".currency");
const numInput = document.getElementById("num");
const ansInput = document.getElementById("ans");

fetch("https://v6.exchangerate-api.com/v6/52cb0241d219a0577dca560e/latest/azn")
    .then((response) => response.json())
    .then((data) => {
        display(data);
    })
    .catch((error) => {
        console.error("Fetch error:", error);
    });

function display(data) {
    const rates = data.conversion_rates;
    for (const currency in rates) {
        const option = document.createElement("option");
        option.value = rates[currency];
        option.textContent = currency;
        select[1].appendChild(option);
    }
}

document.getElementById("btn").addEventListener("click", () => {
    const rate = select[1].value;
    const amount = numInput.value;
    const result = amount * rate;
    ansInput.value = result.toFixed(2);
});
