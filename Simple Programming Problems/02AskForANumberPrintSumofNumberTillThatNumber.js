function getNumber() {
    const num = parseInt(10);
    // const num = parseInt(prompt("please enter a number::"));
    console.log(num);
    if (!isNaN(num) && typeof num === "number") {
        return num;
    } else {
        getNumber();
    }
}

let num = getNumber(), total = 0;
for (let i = 1; i < num; i++) {
    total += i;
}
console.log("Sum of numbers from 1 to " + num + " is ::" + total);