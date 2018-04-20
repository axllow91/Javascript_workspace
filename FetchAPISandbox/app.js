
// Get Text Button
document.getElementById('button1').addEventListener('click', getText);

// Get JSON button
document.getElementById('button2').addEventListener('click', getJSON);

// Get API Data
document.getElementById('button3').addEventListener('click', getExternal);

// Get Local Text File Data
function getText() {
  fetch('test.txt')
  .then(function(response){
    return response.text();
  })
  .then(function(data) {
    document.getElementById('output').innerHTML = data;
  }).catch(function(err){
    console.log(err);
  });
}

// Get Json local data file
function getJSON() {
  fetch('post.json')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      let output = '';
      data.forEach(function(posts){
        output += `<li>${posts.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(error) {
      console.log(error);
    });
}

// Get from external API 
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      let output = '';
      data.forEach(function(user){
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(error) {
      console.log(error);
    });
}
