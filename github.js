fetch("https://api.github.com/users/akshitr25")
.then(res => res.json())
.then(data => {
  document.getElementById("github").innerHTML = `
    <p>Repos: ${data.public_repos}</p>
    <p>Followers: ${data.followers}</p>
  `;
});