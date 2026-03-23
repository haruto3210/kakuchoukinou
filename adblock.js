console.log("AdBlock extension loaded");

const blockList = [
  "doubleclick.net",
  "adservice.google.com",
  "googlesyndication.com",
  "ads.yahoo.com"
];

const observer = new MutationObserver(() => {
  blockList.forEach(domain => {
    document.querySelectorAll(`iframe[src*="${domain}"]`).forEach(el => el.remove());
    document.querySelectorAll(`script[src*="${domain}"]`).forEach(el => el.remove());
  });
});

observer.observe(document, { childList: true, subtree: true });
