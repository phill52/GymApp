function generateRandomId() {
    // Use the current time in milliseconds for the first part of the ID
    const timePart = new Date().getTime();

    // Generate a crypto-random number for the second part of the ID
    const randomPart = window.crypto.getRandomValues(new Uint32Array(1))[0];

    // Combine the time and random parts to create the ID
    const combinedNumber = timePart + randomPart;

    // Ensure the number is within the safe integer range
    return combinedNumber % Number.MAX_SAFE_INTEGER;
}

export { generateRandomId };
