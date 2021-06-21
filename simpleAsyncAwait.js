console.log("Start");
async function myFun() {

  let callMethod = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 10*1000)
  });

  let result = await callMethod; // wait until the callMethod resolves (*)
  console.log("any");
  console.log(result); // "done!"
}

myFun();
