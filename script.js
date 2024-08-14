function firstNonRepeatedChar(str) {
 // Write your code here
	let charCount = {};

    // Iterate through the string and count occurrences of each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Iterate through the string again to find the first non-repeated character
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i];
        }
    }

    // If no non-repeated character is found, return null
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
