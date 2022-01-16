const hugs = [
  "⊂((・▽・))⊃",
  "＼(^o^)／",
  "d=(´▽｀)=b",
  "⊂(◉‿◉)つ",
  "⊂（♡⌂♡）⊃",
  "⊂( ◜◒◝ )⊃",
  "(づ｡◕‿‿◕｡)づ",
  "(づ￣ ³￣)づ",
  "(っ˘̩╭╮˘̩)っ",
  "(っ´▽｀)っ",
  "༼ つ ◕o◕ ༽つ",
  "╏つ” ⊡ 〜 ⊡ ” ╏つ",
  "(⊃｡•́‿•̀｡)⊃",
  "(つ▀¯▀)つ",
  "(> ^_^ )>",
  "⊂(・ヮ・⊂)",
  "⊂(・▽・⊂)",
  "ლ(･ω･*ლ)",
  "ლ(・﹏・ლ)",
  "───==≡≡ΣΣ((( つºل͜º)つ",
  "─=≡Σ((( つ ◕o◕ )つ",
  "ლ(･ω･*ლ)",
  "ヾ(‘c_’ヽ,,)",
];

const hug = hugs[Math.floor(Math.random() * hugs.length)];

document.querySelector("title").innerHTML = hug;
document.querySelector(".cuddle").textContent = hug;
document.querySelector(".label").innerHTML =
  'cuddles for anyone, anytime, anyplace<br /><br /><span class="text label-small">reload for new hug</span>';
