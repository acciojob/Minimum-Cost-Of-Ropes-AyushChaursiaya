function calculateMinCost(ropeLengths) {
    // Validate input
    if (!Array.isArray(ropeLengths) || ropeLengths.some(length => typeof length !== "number" || length <= 0)) {
        throw new Error("Input must be an array of positive numbers.");
    }

    // Use a min-heap to efficiently extract the smallest values
    const minHeap = [...ropeLengths];
    minHeap.sort((a, b) => a - b); // Sorting simulates a min-heap for simplicity

    let totalCost = 0;

    while (minHeap.length > 1) {
        // Extract the two smallest lengths
        const first = minHeap.shift(); // Smallest element
        const second = minHeap.shift(); // Second smallest element

        // Calculate the cost of combining them
        const cost = first + second;
        totalCost += cost;

        // Insert the combined rope length back into the heap
        const index = minHeap.findIndex(x => x > cost);
        if (index === -1) {
            minHeap.push(cost);
        } else {
            minHeap.splice(index, 0, cost); // Insert in sorted order
        }
    }

    return totalCost;
}

// Example usage:
try {
    alert(calculateMinCost([4, 2, 7, 6, 9])); // Output: 62
    // alert(calculateMinCost([8, 4, 6, 12]));  // Output: 58
    // alert(calculateMinCost([1, 2, 3, 4, 5])); // Output: 33
} catch (e) {
    console.error(e.message);
}

