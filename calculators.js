// ===============================
// Tip Calculator Function
// ===============================

function calculateTip(bill, percent) {
  const tip = bill * (percent / 100);
  return tip;
}

// Call calculateTip 3 times
console.log("Tip 1:", calculateTip(100, 10));
console.log("Tip 2:", calculateTip(250, 15));
console.log("Tip 3:", calculateTip(500, 20));


// ===============================
// Delivery Fee Calculator Function
// ===============================

function getDeliveryFee(total, city) {

  if (total >= 1000) {
    return 0;
  }

  if (city === "Kabul") {
    return 50;
  } else if (city === "Bamyan") {
    return 100;
  } else {
    return 150;
  }
}

// Call getDeliveryFee 3 times
console.log("Delivery Fee 1:", getDeliveryFee(500, "Kabul"));
console.log("Delivery Fee 2:", getDeliveryFee(700, "Bamyan"));
console.log("Delivery Fee 3:", getDeliveryFee(1200, "Herat"));