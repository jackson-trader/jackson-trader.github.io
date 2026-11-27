const root = document.documentElement;

// ===== Light / dark toggle with a smooth fade =====
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.classList.add("theme-fade");
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
  setTimeout(() => root.classList.remove("theme-fade"), 550);
});

// If the visitor never picked a theme, follow their device when it changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (err) {}
  if (!saved) root.setAttribute("data-theme", e.matches ? "dark" : "light");
});

// ===== Hero name: split into letters that fade in one after another =====
const nameEl = document.getElementById("heroName");
const fullName = nameEl.textContent.trim();
nameEl.setAttribute("aria-label", fullName);
nameEl.textContent = "";
nameEl.style.position = "relative";

let i = 0;
fullName.split(" ").forEach((word, w) => {
  if (w > 0) {
    const space = document.createElement("span");
    space.className = "space";
    space.setAttribute("aria-hidden", "true");
    nameEl.appendChild(space);
  }
  const wordSpan = document.createElement("span");
  wordSpan.style.whiteSpace = "nowrap";
  wordSpan.setAttribute("aria-hidden", "true");
  for (const ch of word) {
    const letter = document.createElement("span");
    letter.className = "letter";
    letter.textContent = ch;
    letter.style.animationDelay = (0.45 + i * 0.04) + "s";
    wordSpan.appendChild(letter);
    i++;
  }
  nameEl.appendChild(wordSpan);
});

// Stretch one gradient across the whole name (instead of one per letter)
function alignNameGradient() {
  const width = nameEl.offsetWidth;
  nameEl.querySelectorAll(".letter").forEach((letter) => {
    letter.style.setProperty("--name-width", width + "px");
    letter.style.setProperty("--letter-offset", -letter.offsetLeft + "px");
  });
}
alignNameGradient();
window.addEventListener("resize", alignNameGradient);
document.fonts && document.fonts.ready.then(alignNameGradient);

// ===== Back-to-top button: shows after you scroll past the intro =====
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > window.innerHeight * 0.6);
}, { passive: true });

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
