fetch("https://cdn.jsdelivr.net/gh/RetroStash/rsSINGLEFILE@35158a775a60198788b3189a1a4af8cad328c8e7/index.html")
  .then(r => r.text())
  .then(html => {
    document.open();
    document.write(html);
    document.close();
  });
