function calculatePaymentCost(amount) {
    let fee = 3;
    let interestRate = 0.01;
    
    let interestFee = amount * interestRate;
    let totalCost = amount + fee + interestFee;
    
    return totalCost;
  }
  
  // Example usage:
  let paymentAmount = 100; // The amount of the payment
  let paymentCost = calculatePaymentCost(paymentAmount);
  
  console.log("Maria should be paying $" + paymentCost.toFixed(2) + " for the month.");
  