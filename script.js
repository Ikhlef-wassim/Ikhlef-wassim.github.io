const user = "Ikhlef-wassim";
const ghBase = ["https", "://", "github", ".com/", user].join("");

document.getElementById("githubLink").href = ghBase;
document.querySelectorAll("[data-repo]").forEach((el) => {
  el.href = `${ghBase}/${el.getAttribute("data-repo")}`;
});

const copyBtn = document.getElementById("copyDiscordBtn");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    await navigator.clipboard.writeText("ikh._.wa");
    copyBtn.textContent = "Copied: ikh._.wa!";
    setTimeout(() => {
      copyBtn.textContent = "Discord: ikh._.wa";
    }, 2000);
  });
}

const igUser = "unhinged_.dev";
const igLink = document.getElementById("instagramLink");
if (igLink) {
  igLink.href = `https://instagram.com{igUser}`;
}
