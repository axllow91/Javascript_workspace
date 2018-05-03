// Init GitHub
const github = new GitHub();

// Init UI class
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Searc input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== '') {
    // Make HTTP call
    github.getUser(userText)
      .then(data => {
          if(data.profile.message === 'Not Found') {
            // Show alert for users that are not found
            ui.showAlert('User not found', 'alert alert-danger');
          } else {
            // Show profile otherwise
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
          }
      })
  } else {
    // Clear profile
    ui.clearProfile();
  }
});