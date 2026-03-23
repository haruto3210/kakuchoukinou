console.log("NoShorts extension loaded");

if (location.href.includes("youtube.com/shorts/")) {
  location.href = location.href.replace("/shorts/", "/watch?v=");
}
