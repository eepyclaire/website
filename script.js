var i = 0;
var txt = 'I love Stummy Book!';
var cursorVisible = true;
var cursorInterval;

function typeWriter() {
  if (i < txt.length) {
    var delay = Math.random() * 120 + 40;

    if (Math.random() < 0.05) {
      delay += Math.random() * 900 + 300;
    }

    document.title = txt.slice(0, i + 1) + "_";
    i++;
    setTimeout(typeWriter, delay);
  } else {
    startBlinkingCursor();
  }
}

function startBlinkingCursor() {
  cursorInterval = setInterval(() => {
    cursorVisible = !cursorVisible;
    document.title = txt + (cursorVisible ? "_" : "");
  }, 550);
}

typeWriter();