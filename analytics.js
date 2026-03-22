fetch("https://api.ipify.org?format=json")
.then(res => res.json())
.then(data => {
  console.log("Visitor IP:", data.ip);
});