function integerReplacement(n) {
  if (n == 1) return 0;
  else if (n % 2 == 0) return 1 + integerReplacement(n / 2);
  else
    return 1 + Math.min(integerReplacement(n - 1), integerReplacement(n + 1));
}


let n = 8;
console.log(integerReplacement(n));
