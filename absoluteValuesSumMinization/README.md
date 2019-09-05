### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)
---
Given a sorted array of integers a, find an integer x from a such that the value of

    abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
is the smallest possible (here abs denotes the absolute value).
If there are several possible answers, output the smallest one.

*What this really means:*
Find the median value of the array.
The median value is defined as the middle value if the length of the array is odd and the avg (mean) of the middle two values if the length of the array is even.
The example merely uses the middle value of the array with even length OR the left of middle value if it is an odd length.

**Example**

For a = [2, 4, 7], the output should be
absoluteValuesSumMinimization(a) = 4.

For a = [2, 4, 7, 6], the output should be
absoluteValuesSumMinimization(a) = 4.

For a = [2, 4, 7, 6, 6], the output should be
absoluteValuesSumMinimization(a) = 7.

For a = [2, 4, 7, 6, 6, 8], the output should be
absoluteValuesSumMinimization(a) = 7.

**Hints**
-   Math.floor()

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.integer a**

A non-empty array of integers, sorted in ascending order.

*Guaranteed constraints:*

1 ≤ a.length ≤ 200,

-106 ≤ a[i] ≤ 106.

- **[output] integer**