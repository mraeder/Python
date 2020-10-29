// look for 7 starting at index 3
i = nums.indexOf(7, 3); 
if(i === -1) {
    console.log("We could not find the value 7 on or after index 3.")
}
else {
    console.log(`The value 7 appears after index 3 at index: ${i}`);
}
