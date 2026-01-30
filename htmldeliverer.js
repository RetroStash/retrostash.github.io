fetch("https://cdn.jsdelivr.net/gh/RetroStash/rsSINGLEFILE/index.html")
  .then(r => r.text())
  .then(html => {
    document.open();
    document.write(html);
    document.close();
  });
