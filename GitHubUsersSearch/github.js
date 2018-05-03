class GitHub {
  constructor() {
    this.client_id = '6d29ab8e514540a3aaf8';
    this.client_secret = '60f7f58843ee9ab71a5586d142cca026b773f2d5';
    this.repos_count = 5;
    this.sorted_repos = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }

}