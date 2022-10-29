function printNTo1(n) {
  // base case
  if (n === 0) {
    return;
  }

  // processing
  process.stdout.write(n + " ");
  // recursive call (tail recursion)
  printNTo1(n - 1);
}

printNTo1(5);

// T.C = Theta(n) , S.C = Theta(n)
