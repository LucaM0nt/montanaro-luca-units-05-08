function cashRegister(cart) {
  const catalog = {
    orange: 0.97,
    milk: 0.99,
    rice: 1.5,
    cheese: 4.49,
    chicken: 2.49,
  };
  let total = 0;
  cart.forEach((item) => {
    total += catalog[item];
  });
  return total.toFixed(2);
}

let cart = ["orange", "milk", "rice"];
console.log(cashRegister(cart)); // 3.46
