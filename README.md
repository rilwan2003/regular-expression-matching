# Regular Expression Matching with Javascript
This is a JavaScript implementation of the Regular Expression Matching algorithm that supports matching with the . and * special characters. The matching covers the entire input string and returns true if the string matches the given pattern, and false otherwise.

## Algorithm
The implementation uses dynamic programming with memoization to solve the problem. We use a two-dimensional array dp to store the intermediate results of subproblems. The dp[i][j] indicates whether the substring s[i:] matches the pattern p[j:].

The algorithm works as follows:

- If the pattern p is empty, we check if the string s is also empty. If it is, we return true, else we return false.
- If the pattern p is not empty, we check if the first character of the pattern matches the first character of the string s.
- If the first character of the pattern matches the first character of the string s, we continue matching the remaining parts of the string and pattern.
- If the first character of the pattern is ., we can match any character in the string s.
- If the first character of the pattern is *, we need to consider two cases:
- The * matches zero characters in the string s.
- The * matches one or more characters in the string s.
- We use memoization to store the intermediate results of subproblems so that we don't have to recompute them.


We check if the pattern p is empty. If it is, we return true if the string s is also empty, else we return false.
- We check if the first character of the pattern matches the first character of the string s. If it does, - - we continue matching the remaining parts of the string and pattern.
- If the first character of the pattern is . (dot), we can match any character in the string s.
- If the first character of the pattern is * (asterisk), we need to consider two cases:
- The * matches zero characters in the string s.
- The * matches one or more characters in the string s.
- We use memoization to store the intermediate results of subproblems so that we don't have to recompute them.

## Example Usage
1. console.log(isMatch("aa", "a")); // false
2. console.log(isMatch("aa", "a*")); // true
3. console.log(isMatch("ab", ".*")); // true
4. console.log(isMatch("aab", "c*a*b")); // true
5. console.log(isMatch("mississippi", "mis*is*p*.")); // false
6. console.log(isMatch("aaa", "a*a")); // true
7. console.log(isMatch("a", "ab*")); // true
8. console.log(isMatch("a", ".")); // true
9. console.log(isMatch("a", "a.")); // false

## Complexity Analysis
The time complexity of the algorithm is O(SP) where S is the length of the input string s and P is the length of the pattern p. This is because we need to visit every cell in the dp array exactly once.

The space complexity of the algorithm is also O(SP) because we need to store the intermediate results of subproblems in the dp array and the results of previous subproblems in the memoization map.

## Conclusion
The Regular Expression Matching algorithm is a useful tool for string pattern matching. The JavaScript implementation provided here supports matching with the . and * special characters and covers the entire input string. The algorithm uses dynamic programming with memoization to solve the problem in polynomial time and space complexity.
