document.getElementById('calculateButton').addEventListener('click', calculateFare);

function calculateFare() {
    const passengersInput = document.getElementById('passengers');
    let passengers = parseInt(passengersInput.value);

    // Ensure passengers are not negative
    passengers = Math.max(passengers, 0);

    // Check if the number of passengers exceeds the limit
    if (passengers > 16) {
        alert('Maximum number of passengers allowed is 16.');
        return;
    }

    const fareInput = document.getElementById('fare');
    const farePerPassenger = parseFloat(fareInput.value);

    // Ensure fare per passenger is not negative
    const fare = passengers * Math.max(farePerPassenger, 0);

    const paidInput = document.getElementById('paid');
    const paidAmount = parseFloat(paidInput.value);

    // Ensure paid amount is not negative
    const paid = Math.max(paidAmount, 0);

    const change = paid - fare;

    document.getElementById('fareResult').textContent = `Total fare: R${fare.toFixed(2)}. Change: R${change.toFixed(2)}`;
}