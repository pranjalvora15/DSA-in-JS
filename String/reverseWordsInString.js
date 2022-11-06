function naiveApproach(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(
  naiveApproach("DSA Placement ke sath bhi aur placement ke baad bhi")
);

// T.C = O(n), S.C = O(n)

// optimized approach
function optimizedApproach(str) {
  let n = str.length;
  let start = 0;
  let revStr = "";
  
  for (let end = 0; end < n; end++) {
    if (str[end] === " ") {
      revStr = revStr + reverse(str, start, end - 1) + " ";
      start = end + 1;
    }
  }
  revStr = revStr + reverse(str, start, n - 1);
  revStr = reverse(revStr,0,n-1)
  return revStr
}



function reverse(str, start, end) {
  let s = "";
  while (end >= start) {
    s += str[end];
    end--;
  }
  return s;
}

console.log(optimizedApproach("DSA in JS"));

// T.C = O(n), S.C = O(1)
