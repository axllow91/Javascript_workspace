async function myAwaitFunction() {
  const promise = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Hello'), 1000);
  });
  
  const error = false;
  if(!error) {
    // Wait until the promise is resolved
    const res = await promise;
    return res;
  } else {
    await Promise.reject(new Error('Something went wrong!'));
  } 
}

myAwaitFunction()
  .then(res => console.log(res))
  .catch(err => console.log(err));

// Better method to use

async function getUsers() {
  // await response of the fetch call
  // using await keyword make the things more easy to implement
  // we do not need to implement .the() and .catch()
  const response = await fetch('http://jsonplaceholder.typicode.com/users');

  // Only proceed once the fetch promise is resolved
  const data = await response.json();

  // only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));


