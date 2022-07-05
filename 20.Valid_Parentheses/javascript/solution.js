/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let charMap = new Map([
        ['(' , ')'],
        ['{' , '}'],
        ['[' , ']']
    ])
    let stack = []
    
    for(let ch of s) {
        if (charMap.get(ch)) {
            stack.push(charMap.get(ch))
        } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length === 0
};