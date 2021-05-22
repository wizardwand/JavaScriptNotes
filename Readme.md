# JavaScript Knowledge
> Everything in JavaScript happens in Execution Context

![Execution Context](./js_images/executionContext.png)

> JavaScript is a synchronous Single-Threaded Language

> Execution happens in 2 phases 
> 
> phase 1 , Memory exectuion phase, variables get undefined and Function is fully saved
> 
> Phase 2, Code exectuion phase , values of variables are given to variable , and if fuction is called, new exectuion context is created and phase 1 and phase 2 again happen for this method.
>
> It manages all this in a call Stack , where Global exectuion context is @ the bottom.

Call Stack is also know as --
1. Execution Context Stack
2. Program Stack
3. Control Stack
4. Runtime Stack 
5. Machine Stack

> JavaScipt is a loosly typed language,
```JavaScript
var a;
console.log(a);
a = 10;
console.log(a);
a = "hello world";
console.log(a);
```
> never Do **var a = undefined;**



Thanks To **@Akshay Saini** for sharing the knowledge