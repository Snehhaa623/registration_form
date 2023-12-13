let expenses = [];
let totalAmount = 0;
let selectedCategory = "Food"; // Default selected category

const categoryButtons = document.querySelectorAll('.tab-btn');
const amountInput = document.getElementById('amount-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

// Function to update the active category
function updateActiveCategory(category) {
    selectedCategory = category;
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
}

// Event listeners for tab buttons
categoryButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        updateActiveCategory(this.dataset.category);
    });
});

addBtn.addEventListener('click', function() {
    const amount = Number(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    expenses.push({ category: selectedCategory, amount });

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    deleteCell.appendChild(deleteBtn);
});

for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    deleteCell.appendChild(deleteBtn);
}
