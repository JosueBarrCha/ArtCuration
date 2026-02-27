const reels = [
  {
    url: "https://www.instagram.com/reel/DUz1PW5DvqK/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    comentario: "Construcción rítmica precisa y uso de cortes invisibles.",
    categoria: "edicion",
    autor: "@cuenta1",
    año: "2024"
  },
  {
    url: "https://www.instagram.com/reel/DTJ_fewj2iW/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    comentario: "Narrativa implícita con mínima exposición verbal.",
    categoria: "narrativa",
    autor: "@cuenta2",
    año: "2023"
  }
];

const grid = document.getElementById("grid");

function renderReels() {
  reels.forEach(reel => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.category = reel.categoria;

    card.innerHTML = `
      <div class="meta">${reel.autor} · ${reel.año} · ${reel.categoria}</div>
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
}

renderReels();

const buttons = document.querySelectorAll(".controls button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});