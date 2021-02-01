const memo = {};

const totalLadderCombinations = (n) => {
  if (memo[n]) return memo[n];
  if (n <= 1) return 1;
  memo[n] = totalLadderCombinations(n - 1, memo) + totalLadderCombinations(n - 2, memo);
  return memo[n];
};

module.exports = totalLadderCombinations;
