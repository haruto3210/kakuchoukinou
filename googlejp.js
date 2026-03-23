console.log("Google JP redirect loaded");

if (location.hostname === "www.google.com") {
  if (!location.href.includes("hl=ja")) {
    location.href = location.href + "&hl=ja";
  }
}
