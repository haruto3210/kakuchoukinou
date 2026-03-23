console.log("Shortcut extension loaded");

document.addEventListener("keydown", e => {
  if (e.key === "t" && e.ctrlKey) {
    alert("Ctrl+T pressed!");
  }
});
