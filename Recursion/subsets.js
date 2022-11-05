// generate subsets of given string
// or this problem is also same as generating subsequences of string
// for string of length n there are 2^n subsets.

function subsets(str, curr = "", index = 0) {
  if (index === str.length) {
    process.stdout.write(curr + " ");
    return;
  }

  subsets(str, curr, index + 1);
  subsets(str, curr + str[index], index + 1);
}

subsets("ABC");
