let num = 15;

if (num % 3 === 0) {
  console.log(num + " 3の倍数です。");
} else {
  console.log(num);
}

if (num % 5 === 0) {
  console.log(num + " 5の倍数です。");
} else {
  console.log(num);
}

if (num % 5 === 0 && num % 3 === 0) {
  console.log(num + " 3と5の倍数です。");
} else {
  console.log(num);
}