function longPalindrome(s: string, start: number, end: number): boolean {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

function PalindromSub(l: string): string {
    const a = l.length;
    if (a === 0) return "";

    let maxLen = 1;
    let longestPalindrome = l[0];

    for (let i = 0; i < a; i++) {
        for (let j = i; j < a; j++) {
            if (longPalindrome(l, i, j)) {
                const currentLen = j - i + 1;
                if (currentLen > maxLen) {
                    maxLen = currentLen;
                    longestPalindrome = '';
                    for (let k = i; k <= j; k++) {
                        longestPalindrome += l[k];
                    }
                }
            }
        }
    }

    return longestPalindrome;
}


const input = "hello";
const result = PalindromSub(input);
console.log("Longest palindrom substring:", result);