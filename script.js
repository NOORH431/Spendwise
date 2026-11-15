// 1. Array collection to hold all incoming transactions
let expenses = [];

// 2. Event listener tracking your input form submission
document.getElementById("expense-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the page from refreshing

    // Capture values from your form inputs
    const amount = parseFloat(document.getElementById("expense-amount").value);
    const category = document.getElementById("expense-category").value;

    // Push the item into our array collection
    expenses.push({ amount: amount, category: category });

    // 3. Clear and recalculate dashboard totals
    updateDashboardCards();
});

function updateDashboardCards() {
    let foodSum = 0;
    let transportSum = 0;
    let rentSum = 0;
    let entertainmentSum = 0;
    let savingsSum = 0;
    let utilitiesSum = 0;

    // LOOP through the array to calculate the live totals
    for (let i = 0; i < expenses.length; i++) {
        const item = expenses[i];
        if (item.category === "Food") foodSum += item.amount;
        else if (item.category === "Transport") transportSum += item.amount;
        else if (item.category === "Rent") rentSum += item.amount;
        else if (item.category === "Entertainment") entertainmentSum += item.amount;
        else if (item.category === "Savings") savingsSum += item.amount;
        else if (item.category === "Utilities") utilitiesSum += item.amount;
    }

    // DOM Manipulation: Replace the '0' tags with the calculated live totals
    document.getElementById("food-total").textContent = foodSum.toLocaleString();
    document.getElementById("transport-total").textContent = transportSum.toLocaleString();
    document.getElementById("rent-total").textContent = rentSum.toLocaleString();
    document.getElementById("entertainment-total").textContent = entertainmentSum.toLocaleString();
    document.getElementById("savings-total").textContent = savingsSum.toLocaleString();
    document.getElementById("utilities-total").textContent = utilitiesSum.toLocaleString();
}
