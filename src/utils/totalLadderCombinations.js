// const memo = {};

// const totalLadderCombinations = (n) => {
//   if (memo[n]) return memo[n];
//   if (n <= 1) return 1;
//   memo[n] = totalLadderCombinations(n - 1) + totalLadderCombinations(n - 2);
//   return memo[n];
// };

const totalLadderCombinations = (n) => {
  let number = n;
  let a = 1;
  let b = 0;
  let temp;

  while (number >= 0) {
    temp = a;
    a += b;
    b = temp;
    number -= 1;
  }

  return b;
};

module.exports = totalLadderCombinations;
