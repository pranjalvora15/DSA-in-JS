function print1ToN(n) {
  // base case
  if (n === 0) return;

  // recursive call (head recursion)
  print1ToN(n - 1);

  // processing
  process.stdout.write(n + " ");
}

print1ToN(5);

// T.C = Theta(1), S.C = Theta(1) 
