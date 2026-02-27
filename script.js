const reels = [
  {
    url: "https://www.instagram.com/reel/DUz1PW5DvqK/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    comentario: "Uso interesante del ritmo visual y la edición."
  },
  {
    url: "https://www.instagram.com/reel/DTJ_fewj2iW/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    comentario: "Gran manejo de iluminación y narrativa."
  }
];

const grid = document.getElementById("grid");

reels.forEach(reel => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <blockquote 
      class="instagram-media"
      data-instgrm-permalink="${reel.url}"
      data-instgrm-version="14">
    </blockquote>
    <div class="comentario">${reel.comentario}</div>
  `;

  grid.appendChild(card);
});

if (window.instgrm) {
  window.instgrm.Embeds.process();
}