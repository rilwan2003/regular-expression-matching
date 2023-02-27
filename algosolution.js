var isMatch = function(s, p) {
    const memo = new Map(); // to store previous results for memoization
    return dp(0, 0);
  
    function dp(i, j) {
      if (memo.has(`${i},${j}`)) {
        return memo.get(`${i},${j}`);
      }
      if (j === p.length) {
        return i === s.length;
      }
      const firstMatch = i < s.length && (s[i] === p[j] || p[j] === '.');
      let ans;
      if (j + 1 < p.length && p[j + 1] === '*') {
        ans = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
      } else {
        ans = firstMatch && dp(i + 1, j + 1);
      }
      memo.set(`${i},${j}`, ans);
      return ans;
    }
  };
  
  // test cases
  console.log(isMatch("aa", "a")); // false
  console.log(isMatch("aa", "a*")); // true
  console.log(isMatch("ab", ".*")); // true
  console.log(isMatch("aab", "c*a*b")); // true
  console.log(isMatch("mississippi", "mis*is*p*.")); // false
  console.log(isMatch("aaa", "a*a")); // true
  console.log(isMatch("a", "ab*")); // true
  console.log(isMatch("a", ".")); // true
  console.log(isMatch("a", "a.")); // false
  