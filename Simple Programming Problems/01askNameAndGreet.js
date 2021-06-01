function getName() {
    const name = prompt("Please give me your name :D");
    if (name && name !== undefined && name !== "") {
        return name;
    } else {
        getName();
    }
}
const name = getName();
console.log("Namaste " + name + "!");