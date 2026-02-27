const reels = [
  {
    url: "https://www.instagram.com/reel/DUz1PW5DvqK/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    thumbnail: "thumb1.jpg",
    titulo: "Estudio de ritmo visual"
  },
  {
    url: "https://www.instagram.com/reel/DTJ_fewj2iW/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    thumbnail: "thumb2.jpg",
    titulo: "Narrativa minimalista"
  }
];

const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const modalEmbed = document.getElementById("modal-embed");
const closeBtn = document.getElementById("close");

reels.forEach(reel => {
  const div = document.createElement("div");
  div.className = "thumbnail";
  div.innerHTML = `
    <img src="${reel.thumbnail}" alt="">
    <div class="overlay">${reel.titulo}</div>
  `;

  div.addEventListener("click", () => {
    modal.style.display = "flex";
    modalEmbed.innerHTML = `
      <blockquote 
        class="instagram-media"
        data-instgrm-permalink="${reel.url}"
        data-instgrm-version="14">
      </blockquote>
    `;

    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  });

  grid.appendChild(div);
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalEmbed.innerHTML = "";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalEmbed.innerHTML = "";
  }
});