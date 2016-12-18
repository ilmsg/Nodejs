var asyncAdd = (a,b) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      } else {
        reject('Arguments must be number');
      }
    }, 1500)
  })
};

asyncAdd(5, 9).then((res)=>{
  console.log('Result: ',res);
}, (errorMessage)=>{
  console.log('Error: ', errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//   resolve('Hey, It worked!');
// });
//
// somePromise.then((message)=> {
//   console.log('Success: ', message);
// })
