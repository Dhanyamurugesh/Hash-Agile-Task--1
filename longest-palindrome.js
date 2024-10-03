function longPalindrome(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
function PalindromSub(l) {
    var a = l.length;
    if (a === 0)
        return "";
    var maxLen = 1;
    var longestPalindrome = l[0];
    for (var i = 0; i < a; i++) {
        for (var j = i; j < a; j++) {
            if (longPalindrome(l, i, j)) {
                var currentLen = j - i + 1;
                if (currentLen > maxLen) {
                    maxLen = currentLen;
                    longestPalindrome = '';
                    for (var k = i; k <= j; k++) {
                        longestPalindrome += l[k];
                    }
                }
            }
        }
    }
    return longestPalindrome;
}
var input = "hello";
var result = PalindromSub(input);
console.log("Longest palindrom substring:", result);
