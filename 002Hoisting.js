// Hoisting

let x = 7;

function getName() {
    // Proper funtion
    console.log("GetName proper function");
}

var getName_variable = function (){
    // this is get name normal function
    console.log("GetName function as Varibale");
}

var getName_arrow_function = () => {
    // way to define function
    console.log("GetName function as arrow");
}

getName()
getName_variable()
getName_arrow_function()