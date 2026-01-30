fetch("https://cdn.jsdelivr.net/gh/RetroStash/rsSINGLEFILE@7bfd2795b0e46324022c45b2ccda280c30959837/index.html")
  .then(r => r.text())
  .then(html => {
    document.open();
    document.write(html);
    document.close();
  });
