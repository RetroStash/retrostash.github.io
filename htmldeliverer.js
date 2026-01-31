fetch("https://cdn.jsdelivr.net/gh/RetroStash/rsSINGLEFILE@4ad02cfb08c1d2e4a0b703467fb089e87ed3609e/index.html")
  .then(r => r.text())
  .then(html => {
    document.open();
    document.write(html);
    document.close();
  });
