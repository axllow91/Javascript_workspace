// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e) {

    // Hide results even is hidden by default
    document.getElementById('results').style.display = 'none';

    // Show Loader
    document.getElementById('loading').style.display = 'block';

    // show for 2 seconds
    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// Calculate results
function calculateResults() {

    console.log('Calculating...');

    // UI Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const yearsTorepay = document.getElementById('years');

    //
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    // getting the amount returned it to a decimal (floating-point)
    const principal = parseFloat(amount.value);

    // returning the interest by divide it
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;

    // payments
    const calculatedPayments = parseFloat(yearsTorepay.value) * 12;
    
    // Compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if(isFinite(monthly)) {
        // toFixed() setting the number of decimals to a number
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        // Show the results
        document.getElementById('results').style.display = 'block';

        // Hide loader.gif
        document.getElementById('loading').style.display = 'none';

    } else {
        //
        showError('Please check your numbers');
    }
}


// Checking for numbers
function showError(error) {

    // Hide the results
    document.getElementById('results').style.display = 'none';

    // Hide loader.gif
    document.getElementById('loading').style.display = 'none';

    // Create a div
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // in bootstrap to show an alert you need to name the class "alert alert-danger"
    // Add class
    errorDiv.className = "alert alert-danger";

    // Create text node and append to div (error)
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear the error message after 3 seconds
    setTimeout(clearError, 3000);

}

// Clear error
function clearError() {
    document.querySelector('.alert').remove();
}