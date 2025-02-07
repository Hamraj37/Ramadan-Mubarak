function identify() {
    if (localStorage.getItem("theme") == "dark") {
        setDark(true);
        document.getElementById("switch").checked = true;
    } else {
        setDark(false);
    }
}

function setDark(Dark) {
    if (Dark) {
        document.body.setAttribute("id", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.setAttribute("id", "light");
        localStorage.removeItem("theme");
    }
}

function toggleCheck() {
    if (document.getElementById("switch").checked == true) {
        setDark(true);
    } else {
        setDark(false);
    }
}

function start () {
  // (PART A) GET SPLASH SCREEN
  let splash = document.getElementById("splash");
 
  // (PART B) PLAY BGM & REMOVE SPLASH SCREEN AFTER FADE IN
  splash.addEventListener("transitionend", () => {
    document.getElementById("bgm").play();
    splash.remove();
  });
 
  // (PART C) GO!
  splash.classList.add("hide");
}
