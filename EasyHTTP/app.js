const http = new easyHttp;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(error, posts) {
//   if(error) {
//     console.log(error);
//   } else {
//     console.log(posts);  
//   }
// });

// // Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, post) {
//   if(error) {
//     console.log(error);
//   } else {
//     console.log(post);  
//   }
// });

// Create Data
const data = {
  title: 'Custom Post', 
  body: 'This is a custom post'
};


// Create Post 
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(post);
//   }
// }); 

// Create PUT
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, 
// function(err, post) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
// });

// Create DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/1', data,
function(err, post){
  if(err) {
    console.log(err);
  } else {
    console.log('Post:\n###: ' + post);
  }
});