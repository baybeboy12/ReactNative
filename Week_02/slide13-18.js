// How to create Promise()
var f = function (relsolve, reject) {
  relsolve();
  //reject();
};
var promise = new Promise(f);
// How to create Promise()
promise.then().catch().finally();

promise
  .then(function () {
    console.log("Successful!");
  })
  .catch(function () {
    console.log("UnSuccessful!");
  })
  .finally(function () {
    console.log("Finally!");
  });

promise
  .then(function () {
    console.log("Successful!");
  })
  .catch(function () {
    console.log("UnSuccessful!");
  })
  .finally(function () {
    console.log("Finally!");
  });
