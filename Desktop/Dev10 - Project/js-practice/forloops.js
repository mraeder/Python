let sum = 0;
for(let i = 1; i <= 10; i++) {
    sum += Math.floor(Math.random() * 6) + 1;
}

console.log(`The average of 10 rolls was ${sum / 10}`);