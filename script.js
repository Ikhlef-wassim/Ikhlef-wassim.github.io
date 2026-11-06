const user = "Ikhlef-wassim";
const ghBase = ["https", "://", "github", ".com/", user].join("");

document.getElementById("githubLink").href = ghBase;
document.querySelectorAll("[data-repo]").forEach((el) => {
  el.href = `${ghBase}/${el.getAttribute("data-repo")}`;
});

const copyBtn = document.getElementById("copyDiscordBtn");
copyBtn.addEventListener("click", async () => {
  await navigator.clipboard.writeText("ikh._.wa");
  copyBtn.textContent = "Copied: ikh._.wa!";
  setTimeout(() => {
    copyBtn.textContent = "Discord: ikh._.wa";
  }, 2000);
});
