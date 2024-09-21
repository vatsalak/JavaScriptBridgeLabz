//4. String padStart() & padEnd()

//You can add other content to the beginning or end of the string and fill it to the specified length.

//In the past, these functions are usually introduced with universal auxiliary kits (such as lodash) and had them together.

//Native syntax now provides direct:

String.padStart(fillingLength, FillingContent);
// If the content to be filled is too much and exceeds the "filling length", it will be filled from the far left to the upper limit of the length, and the excess part will be truncated
//The most commonly used situation should be the amount, fill in the specified length, and add 0 if it is insufficient.

// padStart
'100'.padStart(5, 0); // 00100
// If the content to be padded exceeds the "padding length". Then fill in from the left to the upper limit of the length
'100'.padStart(5, '987'); // 98100

// padEnd
'100'.padEnd(5, 9); // 10099
// If the content to be padded exceeds the "padding length". Then fill in from the right to the upper limit of the length
'100'.padStart(5, '987'); // 10098