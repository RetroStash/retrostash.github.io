fetch("https://api.github.com/repos/RetroStash/rsSINGLEFILE/commits")
  .then(res => res.json())
  .then(data => {
    const fullSHA = data[0].sha;
    window.location.replace(`https://cdn.jsdelivr.net/gh/RetroStash/rsSINGLEFILE@${fullSHA}/index.html`);
  })
  .catch(err => console.error(err));
