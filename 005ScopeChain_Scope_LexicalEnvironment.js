function a() {
    console.log("in function a::" + num);
    b();
    function b() {
        console.log("in function b::" + num);
        c();
        function c() {
            console.log("in function c::" + mum);
        }
    }
}
var num = 10;
a();
console.log("in globla function ::" + num);

/**
 * Every function has lexical environment of it's parent
 * function C has lexical environment of function A
 * function A has lexical environment of function Global
 * Global has lexical environment as null
 */