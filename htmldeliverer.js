fetch("https://api.github.com/repos/RetroStash/rsSINGLEFILE/commits")
  .then(res => res.json())
  .then(data => {
    const sha = data[0].sha;
    return fetch(
      `https://cdn.jsdelivr.net/gh/RetroStash/rsSINGLEFILE@${sha}/index.html`
    );
  })
  .then(res => res.text())
  .then(html => {
    document.open();
    document.write(html);
    document.close();
  })
  .catch(err => console.error(err));
