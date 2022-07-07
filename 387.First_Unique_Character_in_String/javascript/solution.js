// Walkthrough and discussion: https://medium.com/@michelle.wiginton00/leetcode-387-first-unique-character-in-a-string-2903d80b8838

var firstUniqChar = function(s) {
    let charMap = [];
    for (let i = 0; i < s.length; i++) {
        if(charMap[s[i]]) {
            charMap[s[i]] ++;
        } else {
            charMap[s[i]] = 1;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (charMap[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};

firstUniqChar('memory');
