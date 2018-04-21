const http = new EasyHTTP();

// Get Users
// const users = http.get('http://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// User data
const data = {
  name: 'John',
  userName: 'first_john',
  email: 'myemail@yadoo.pom'
};

// Create User
// const users = http.post('http://jsonplaceholder.typicode.com/users/', data)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// Make an Update (PUT)
// const userUpdated = 2;
// const users = http.put(`http://jsonplaceholder.typicode.com/users/${userUpdated}`, data)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// // 
const users = http.delete('http://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(error => console.log(error));

