# Array Rotation

An array $A$ consisting of $N$ integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place.

For example, the rotation of array $A = [3, 8, 9, 7, 6]$ is $[6, 3, 8, 9, 7]$ (elements are shifted right by one index and $6$ is moved to the first place).

The goal is to rotate array $A$ $K$ times; that is, each element of $A$ will be shifted to the right $K$ times.

## Task

Write a function:

```typescript
function solution(A: number[], K: number): number[];
```

that, given an array $A$ consisting of $N$ integers and an integer $K$, returns the array $A$ rotated $K$ times.

For example, given:
```typescript
A = [3, 8, 9, 7, 6]
K = 3
```
the function should return `[9, 7, 6, 3, 8]`. Three rotations were made:
* `[3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]`
* `[6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]`
* `[7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]`

For another example, given:
```typescript
A = [0, 0, 0]
K = 1
```
the function should return `[0, 0, 0]`.

Given:
```typescript
A = [1, 2, 3, 4]
K = 4
```
the function should return `[1, 2, 3, 4]`.

## Assumptions

* $N$ and $K$ are integers within the range `[0..100]`.
* Each element of array $A$ is an integer within the range `[-1,000..1,000]`.

In your solution, focus on **correctness**. The performance of your solution will not be the focus of the assessment.

## Solution Explanation

To solve this problem efficiently and cleanly, we can use array slicing. 

### 1. Handling Edge Cases
First, we handle cases where no rotation changes the array:
* If the array length $N \le 1$, any rotation results in the same array.
* If $K = 0$, no rotation is needed.

In these cases, we can immediately return $A$.

### 2. Optimizing the Rotation Count ($K$)
If the number of rotations $K$ is greater than or equal to the array length $N$, we can optimize it. Rotating an array of size $N$ exactly $N$ times results in the original array.
Therefore, rotating it $K$ times is equivalent to rotating it `K % N` times. We call this the `effectiveK`.
* If `effectiveK == 0`, we return $A$.

### 3. Array Slicing
To shift the elements right by `effectiveK` times:
* The last `effectiveK` elements will wrap around to the beginning of the array.
* The remaining elements from the beginning up to index $N - \text{effectiveK}$ will shift to the right.

We can split the array at index $splitIndex = N - \text{effectiveK}$:
* `rightPart = A[splitIndex:]` (last `effectiveK` elements)
* `leftPart = A[0:splitIndex]` (first $N - \text{effectiveK}$ elements)

Finally, we concatenate them to form the result: `[...rightPart, ...leftPart]`.

### Complexity
* **Time Complexity**: $\mathcal{O}(N)$ because slicing and copying the array takes linear time proportional to the number of elements.
* **Space Complexity**: $\mathcal{O}(N)$ to store the returned array.

