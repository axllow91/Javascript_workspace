const posts = [
  {title: 'PostOne', body: 'This is post one'},
  {title: 'PostTwo', body: 'This is post two'},
];

// function createPost(post) {
//   setTimeout(function(post){
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPost();

// creating post with promise
function createPost(post, callback) {
  
  return new Promise(function(resolve, reject){  // resolve is when what we were doing is done
    setTimeout(function(){                       // reject is when we have some sort of error 
      posts.push(post);
      const error = false;

      if(!error) {
        resolve();
      } else {
        reject('Erorr: SOmething went wrong!');
      }
      
    }, 2000);                                               
  });


  
}
function getPosts() {
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(err) {
  console.log(err);
})