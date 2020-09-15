const btn = document.getElementById("emoji-btn");

const emojis = [
  "😂",
  "😋",
  "😎",
  "😃",
  "😘",
  "🤣",
  "😆",
  "😏",
  "🤩",
  "🤐",
  "😴",
  "🙄",
  "😑",
  "🥱",
  "😛",
  "😒",
  "😝",
  "😪",
  "🤑",
  "😖",
  "😰",
  "😱",
  "😭",
  "🤬",
  "🥶",
  "😍",
  "😚",
  "🥴",
  "🤪",
];

btn.addEventListener("mousemove", () => {
  btn.innerText = emojis[Math.floor(Math.random() * emojis.length)];
});
