// Clipboard Copying
const timeouts = [];

document.querySelector(".cuddle").addEventListener("click", () => {
  // Reset timeouts
  for (const timeout of timeouts) {
    clearTimeout(timeout);
  }

  // Copy to clipboard
  navigator.clipboard.writeText(cuddleText.textContent);

  // Reset animation
  document.documentElement.style.setProperty("--copy-transition", "top");
  document.documentElement.style.setProperty("--copy-top", "30px");
  document.documentElement.style.setProperty("--copy-visibility", "0");

  // trigger animation
  document.documentElement.style.setProperty("--copy-visibility", "100");
  document.documentElement.style.setProperty("--copy-top", "10px");

  // Set timeouts
  timeouts.push(
    setTimeout(() => {
      document.documentElement.style.setProperty("--copy-transition", "all");
      document.documentElement.style.setProperty("--copy-visibility", "0");

      timeouts.push(
        setTimeout(() => {
          document.documentElement.style.setProperty("--copy-top", "30px");
        }, 500)
      );
    }, 2000)
  );
});
