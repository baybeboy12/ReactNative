var data = {
  id: 1,
  name: "dung",
};

var promise = new Promise(function (resolve, reject) {
  resolve();
});

promise
  .then(function () {
    console.log(0);
    return 1;
  })
  .then(function (data) {
    console.log(data);
    return 2;
  })
  .then(function (data) {
    console.log(data);
  });
