# Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

# Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

# Example 1:
# Input: x = 123
# Output: 321

# Example 2:
# Input: x = -123
# Output: -321

# Example 3:
# Input: x = 120
# Output: 21

# Example 4:
# Input: x = 0
# Output: 0
 

# Constraints:

# -231 <= x <= 231 - 1

def reverse(x: int) -> int:
    if x < 0:
        x = str(x)[1:][::-1]
        while x[0] == '0':
            x = x[1:]
        x = 0-int(x)
        if x < -2**31:
            return 0
        return x
    else:
        if x <10:
            return x
        x = str(x)[::-1]
        while x[0] == '0':
            x = x[1:]
        x = int(x)
        if x > (2**31)-1:
            return 0
        return x

print(reverse(12345))