/**
 * Finds the length of the longest binary gap within a positive integer N.
 * A binary gap is a maximal sequence of consecutive zeros surrounded by ones.
 *
 * @param value A positive integer within the range [1..2,147,483,647]
 * @returns The length of its longest binary gap, or 0 if none exist.
 */
function getLargersteGap(value: number): number {
  const binaryString = value.toString(2);
  let currentGap = 0;
  let maxGapSize = 0;
  let hasSeenOne = false;
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === "1") {
      if (hasSeenOne) {
        if (currentGap > maxGapSize) {
          maxGapSize = currentGap;
        }
      }
      hasSeenOne = true;
      currentGap = 0;
    } else {
        if(hasSeenOne){
            currentGap++;
        }
      
    }
  }
  return maxGapSize;
}

console.log(`N = 1041 (10000010001) -> Max Gap: ${getLargersteGap(1041)}`); // Expected: 5
console.log(`N = 32 (100000)       -> Max Gap: ${getLargersteGap(32)}`);   // Expected: 0
console.log(`N = 9 (1001)          -> Max Gap: ${getLargersteGap(9)}`);    // Expected: 2
console.log(`N = 529 (1000010001)  -> Max Gap: ${getLargersteGap(529)}`);  // Expected: 4
console.log(`N = 20 (10100)        -> Max Gap: ${getLargersteGap(20)}`);   // Expected: 1
console.log(`N = 15 (1111)         -> Max Gap: ${getLargersteGap(15)}`);   // Expected: 0