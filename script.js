function calculateContract() {
    const contractTotal = document.getElementById('contractTotal').value;
    const contractTerm = document.getElementById('contractTerm').value;
    const startDate = document.getElementById('startDate').value;
    const numberOfPayments = document.getElementById('numberOfPayments').value;
    const paymentAmount = document.getElementById('paymentAmount').value;
    const paymentFrequency = document.getElementById('paymentFrequency').value;

    let resultText = `
        Contract Total: ${contractTotal}<br>
        Contract Term: ${contractTerm} months<br>
        Start Date: ${startDate}<br>
        Number of Payments: ${numberOfPayments}<br>
        Payment Amount: ${paymentAmount}<br>
        Payment Frequency: ${paymentFrequency}
    `;

    document.getElementById('result').innerHTML = resultText;
}
