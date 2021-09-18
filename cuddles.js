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

function newHug() {
    return hugs[Math.floor(Math.random() * hugs.length)];
}


function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

window.onload = () => {
    const cuddleText = document.querySelector(".cuddle");

    async function setNewHug() {
        cuddleText.textContent = newHug();
    }

    let timeouts = [];

    cuddleText.addEventListener("click", () => {
        // Reset timeouts
        for (const timeout of timeouts) {
            clearTimeout(timeout);
        }

        // Copy to clipboard
        copyToClipboard(cuddleText.textContent);
        
        // Reset animation
        document.documentElement.style.setProperty("--copy-transition", "top");
        document.documentElement.style.setProperty("--copy-top", "30px");
        document.documentElement.style.setProperty("--copy-visibility", "0");

        // trigger animation
        document.documentElement.style.setProperty("--copy-visibility", "100");
        document.documentElement.style.setProperty("--copy-top", "10px");

        // Set timeouts
        timeouts.push(setTimeout(() => {
            document.documentElement.style.setProperty("--copy-transition", "all");
            document.documentElement.style.setProperty("--copy-visibility", "0");

            timeouts.push(setTimeout(() => {
                document.documentElement.style.setProperty("--copy-top", "30px");
            }, 500));
        }, 2000))
    })

    setNewHug().then(() => {
        document.querySelector(".label").innerHTML =
            'cuddles for anyone, anytime, anyplace<br /><br /><span class="text label-small">reload for new hug</span>';
    });
};
