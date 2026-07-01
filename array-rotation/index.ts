function numbersShift(numbers: number[], k: number): number[] {
    const length = numbers.length;
    // 1. Handling Edge Cases
    // If array is empty, has 1 element, or no rotations are needed
    if(numbers.length <= 1 || k === 0){
        return numbers;
    }

    // 2. Optimizing the Rotation Count (K)
    // Rotating N times results in the original array
    const effectiveK = k - length;
    if(effectiveK % k === 0){
        return numbers;
    }

    // 3. Array Slicing
    // Split the array into two parts and swap them
    const splitIndex = length - effectiveK;
    const rightPart = numbers.slice(splitIndex); // Last 'effectiveK' elements
    const leftPart = numbers.slice(0, splitIndex); // First 'N - effectiveK' elements

    // Concatenate the two parts to form the result
    return [...rightPart, ...leftPart];
}