const reels = [
  {
    url: "https://www.instagram.com/reel/DTJ_fewj2iW/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    comentario: "Peace"
  },
  {
    url: "https://www.instagram.com/reel/DUz1PW5DvqK/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    comentario: "My wife says I can't have the hat."
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
      data-instgrm-version="14"
      style="background:#FFF; border:0; margin:0; padding:0;">
    </blockquote>
    <p>${reel.comentario}</p>
  `;

  grid.appendChild(card);
});