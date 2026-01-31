fetch("https://api.github.com/repos/RetroStash/rsSINGLEFILE/commits")
  .then(res => res.json())
  .then(data => {
    const fullSHA = data[0].sha;
    fetch("https://cdn.jsdelivr.net/gh/RetroStash/rsSINGLEFILE@${fullSHA}/index.html")
  .then(r => r.text())
  .then(html => {
    document.open();
    document.write(html);
    document.close();
  })
  .catch(err => console.error(err));
