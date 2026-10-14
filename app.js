/**
 * GALI DANA KULINER NATAL - TI PELITA NUSANTARA IIK BHAKTA
 * Core Application Logic & Interactive Menu Showcase (No Cart)
 */

// ================= MENU DATA DEFINITION =================
const MENU_DATA = [
  {
    id: "dimsum-mentai",
    title: "Dimsum Mentai",
    category: "savory",
    categoryLabel: "Asin & Gurih",
    portion: "Berisi 4 pcs",
    price: 16000,
    priceBadge: "16K",
    image: "dimsum mentai.jpeg",
    description: "Dimsum ayam premium bertabur saus mentai creamy khas Jepang yang di-torch dengan aroma smokey menggugah selera, dilengkapi taburan nori renyah.",
    variants: null
  },
  {
    id: "tahu-kocek",
    title: "Tahu Kocek",
    category: "savory",
    categoryLabel: "Asin & Gurih",
    portion: "1 Porsi",
    price: 13000,
    priceBadge: "13K",
    image: "tahu kocek.jpeg",
    description: "Tahu goreng garing di luar lembut di dalam, dikocek bersama ulekan cabai rawit pedas nampol dan bumbu bawang putih gurih sedap khas kuliner favorit kampus.",
    variants: null
  },
  {
    id: "pisang-coklat",
    title: "Pisang Coklat",
    category: "sweet",
    categoryLabel: "Manis & Gurih",
    portion: "Berisi 7 pcs",
    price: 13000,
    priceBadge: "13K",
    image: "pisang coklat.jpeg",
    description: "Pisang manis lumer berbalut kulit lumpia super crispy, disiram lelehan cokelat premium manis legit yang melimpah di setiap gigitan.",
    variants: null
  },
  {
    id: "wonton-chili-oil",
    title: "Wonton",
    category: "savory",
    categoryLabel: "Chili Oil / Gurih",
    portion: "1 Porsi",
    price: 12000,
    priceBadge: "12K",
    image: "wonton chili oil.jpeg",
    description: "Pangsit rebus gurih dengan isian daging ayam padat lembut, disajikan dalam siraman chili oil wangi rempah aromatik pedas nikmat menggigit.",
    variants: null
  },
  {
    id: "udang-rambutan",
    title: "Udang Rambutan",
    category: "savory",
    categoryLabel: "Asin & Gurih",
    portion: "Berisi 4 pcs",
    price: 13000,
    priceBadge: "13K",
    image: "udang rambutan.jpeg",
    description: "Bola-bola udang dan ayam bercita rasa gurih juicy berbalut irisan kulit pangsit kriuk renyah menyerupai buah rambutan, disajikan dengan saus cocolan istimewa.",
    variants: null
  },
  {
    id: "cheese-roll",
    title: "Cheeseroll",
    category: "sweet",
    categoryLabel: "Manis & Gurih",
    portion: "Berisi 7 pcs",
    price: 13000,
    priceBadge: "13K",
    image: "cheese roll.jpeg",
    description: "Gulungan stik keju gurih renyah berpadu taburan keju parut melimpah dan saus manis lumer, camilan manis-gurih favorit pencinta keju.",
    variants: null
  },
  {
    id: "salad-buah",
    title: "Salad",
    category: "sweet",
    categoryLabel: "Segar & Creamy",
    portion: "1 Porsi",
    price: 13000,
    priceBadge: "13K",
    image: "salad.png",
    description: "Potongan buah-buahan segar (anggur, stroberi, jeruk segar) berpadu saus dressing mayo creamy manis dengan limpahan parutan keju cheddar premium.",
    variants: null
  },
  {
    id: "artisan-cookies",
    title: "Cookies",
    category: "sweet",
    categoryLabel: "Soft-Baked Cookie",
    portion: "1 Pcs",
    price: 7000,
    priceRange: "7K - 8K",
    priceBadge: "7/8K",
    image: "chocolate original detailed.jpg",
    description: "Soft-baked cookie premium bertekstur chewy dan lembut di dalam dengan lelehan butter dan filling pilihan istimewa.",
    variants: [
      {
        id: "choco-orig",
        name: "Chocolate Original",
        price: 7000,
        priceBadge: "7K",
        image: "chocolate original detailed.jpg",
        desc: "Soft-baked cookie klasik dengan lelehan cokelat premium berlimpah yang manis legit."
      },
      {
        id: "matcha-cheese",
        name: "Matcha Cheese",
        price: 8000,
        priceBadge: "8K",
        image: "matcha cheese detailed.jpg",
        desc: "Perpaduan matcha Jepang autentik berpadu aroma keju creamy yang melted lembut."
      },
      {
        id: "redvelvet-cheese",
        name: "Red Velvet Cheese",
        price: 8000,
        priceBadge: "8K",
        image: "red velvet cheese detailed.jpg",
        desc: "Adonan red velvet merah cantik beraroma vanilla-kakao dengan lelehan cream cheese gurih mewah."
      }
    ]
  },
  {
    id: "samyang-roll",
    title: "Samyang Roll",
    category: "savory",
    categoryLabel: "Pedas & Gurih",
    portion: "Berisi 3 pcs",
    price: 13000,
    priceBadge: "13K",
    image: "samyang roll new detailed.jpg",
    description: "Mie pedas Samyang berpadu isian gurih yang digulung rapi dengan rice paper kenyal, sensasi pedas gurih nagih ala Korean street food.",
    variants: null
  },
  {
    id: "cheesecuit",
    title: "Cheesecuit",
    category: "sweet",
    categoryLabel: "Dessert Box",
    portion: "1 Porsi (Box)",
    price: 10000,
    priceBadge: "10K",
    image: "cheesecuit tiramisu.jpg",
    description: "Dessert box viral dengan biskuit renyah berlapis cream cheese manis gurih lumer di mulut dengan berbagai pilihan varian topping istimewa.",
    variants: [
      {
        id: "cuit-tiramisu",
        name: "Tiramisu",
        price: 10000,
        priceBadge: "10K",
        image: "cheesecuit tiramisu.jpg",
        desc: "Biskuit renyah berlapis cream cheese lembut berpadu aroma kopi & taburan bubuk cokelat kakao mewah."
      },
      {
        id: "cuit-oreo",
        name: "Oreo",
        price: 10000,
        priceBadge: "10K",
        image: "cheesecuit oreo.jpg",
        desc: "Lapisan keju creamy lezat berpadu remukan biskuit Oreo crunchy manis legit."
      },
      {
        id: "cuit-matcha",
        name: "Matcha",
        price: 10000,
        priceBadge: "10K",
        image: "cheesecuit matcha.jpg",
        desc: "Sentuhan green tea matcha wangi berpadu krim keju lembut memanjakan lidah."
      },
      {
        id: "cuit-redvelvet",
        name: "Red Velvet",
        price: 10000,
        priceBadge: "10K",
        image: "cheesecuit redvelvet.jpg",
        desc: "Biskuit red velvet khas berpadu saus keju lembut yang manis menggoda."
      }
    ]
  }
];

// Contact Persons Data
const CONTACT_PERSONS = {
  maria: {
    name: "Kak Maria",
    phone: "6282228764048",
    display: "+62 822-2876-4048"
  },
  yessy: {
    name: "Kak Yessy",
    phone: "6281977182071",
    display: "+62 819-7718-2071"
  }
};

// ================= APP STATE =================
let activeCategory = "all";
let searchQuery = "";
let currentModalItem = null;
let currentSelectedVariant = null;

// Format Currency
function formatRupiah(amount) {
  return "Rp " + amount.toLocaleString("id-ID");
}

// ================= INITIALIZATION =================
document.addEventListener("DOMContentLoaded", () => {
  renderMenuGrid();
  setupEventListeners();
  initSnowEffect();
  initChristmasMusic();
});

// ================= RENDER MENU GRID =================
function renderMenuGrid() {
  const container = document.getElementById("menuGrid");
  if (!container) return;

  const filtered = MENU_DATA.filter(item => {
    const matchesCategory = (activeCategory === "all") || (item.category === activeCategory);
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.variants && item.variants.some(v => v.name.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
        <h3 style="font-family: var(--font-serif-heading); color: var(--text-main);">Menu Tidak Ditemukan</h3>
        <p style="font-size: 0.85rem;">Coba gunakan kata kunci lain seperti "Cookies", "Dimsum", atau "Cheesecuit".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const hasVariants = Boolean(item.variants && item.variants.length > 0);
    const displayBadge = item.priceRange || item.priceBadge;
    
    // Mini preview of variants if available
    let variantsPreviewHtml = "";
    if (hasVariants) {
      variantsPreviewHtml = `
        <div class="card-variants-preview">
          ${item.variants.map(v => `<span class="mini-variant-tag">${v.name}</span>`).join("")}
        </div>
      `;
    }

    return `
      <article class="food-card" onclick="openMenuModal('${item.id}')" role="button" tabindex="0" aria-label="Lihat detail ${item.title}">
        
        <div class="food-card-visual">
          <img src="${item.image}" alt="${item.title}" class="food-card-img" loading="eager">
          
          <span class="card-price-badge">${displayBadge}</span>
          <span class="card-portion-badge">${item.portion}</span>
          
          ${hasVariants ? `<span class="card-variant-badge">✨ ${item.variants.length} Varian</span>` : ""}
        </div>

        <div class="food-card-content">
          <span class="card-cat-tag">${item.categoryLabel}</span>
          <h3 class="food-card-title">${item.title}</h3>
          <p class="food-card-desc">${item.description}</p>
          
          ${variantsPreviewHtml}

          <button type="button" class="food-card-btn" onclick="event.stopPropagation(); openMenuModal('${item.id}')">
            <span>${hasVariants ? "Lihat Detail & Varian Rasa" : "Lihat Detail Menu"}</span>
            <span>→</span>
          </button>
        </div>

      </article>
    `;
  }).join("");
}

// ================= MODAL: MENU DETAIL & VARIANTS =================
function openMenuModal(itemId) {
  const item = MENU_DATA.find(m => m.id === itemId);
  if (!item) return;

  currentModalItem = item;

  const modal = document.getElementById("menuModalBackdrop");
  const modalImg = document.getElementById("modalItemImage");
  const modalTitle = document.getElementById("modalItemTitle");
  const modalPrice = document.getElementById("modalItemPrice");
  const modalDesc = document.getElementById("modalItemDesc");
  const modalPortion = document.getElementById("modalPortionTag");
  const modalCategory = document.getElementById("modalCategoryTag");
  const variantSection = document.getElementById("modalVariantSection");
  const variantGrid = document.getElementById("variantOptionsGrid");
  const portionDetailText = document.getElementById("portionDetailText");

  modalTitle.textContent = item.title;
  modalCategory.textContent = item.categoryLabel;
  modalPortion.textContent = item.portion;
  portionDetailText.textContent = `Porsi: ${item.portion} • Freshly prepared`;

  if (item.variants && item.variants.length > 0) {
    // Select first variant by default
    currentSelectedVariant = item.variants[0];
    variantSection.style.display = "block";
    
    // Render variant radio pills
    variantGrid.innerHTML = item.variants.map((v, idx) => `
      <div class="variant-pill-option ${idx === 0 ? "selected" : ""}" 
           onclick="selectModalVariant('${v.id}')" 
           id="varPill_${v.id}"
           role="radio" 
           aria-checked="${idx === 0 ? "true" : "false"}"
           tabindex="0">
        <div class="var-pill-left">
          <div class="var-radio-dot"></div>
          <span class="var-pill-name">${v.name}</span>
        </div>
        <span class="var-pill-price">${formatRupiah(v.price)}</span>
      </div>
    `).join("");

    updateModalVariantView();
  } else {
    currentSelectedVariant = null;
    variantSection.style.display = "none";
    modalImg.src = item.image;
    modalImg.alt = item.title;
    modalPrice.textContent = formatRupiah(item.price);
    modalDesc.textContent = item.description;
  }

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function selectModalVariant(variantId) {
  if (!currentModalItem || !currentModalItem.variants) return;
  const variant = currentModalItem.variants.find(v => v.id === variantId);
  if (!variant) return;

  currentSelectedVariant = variant;

  // Update pills visual state
  document.querySelectorAll(".variant-pill-option").forEach(pill => {
    pill.classList.remove("selected");
    pill.setAttribute("aria-checked", "false");
  });
  const selectedPill = document.getElementById(`varPill_${variantId}`);
  if (selectedPill) {
    selectedPill.classList.add("selected");
    selectedPill.setAttribute("aria-checked", "true");
  }

  updateModalVariantView();
}

function updateModalVariantView() {
  if (!currentSelectedVariant) return;

  const modalImg = document.getElementById("modalItemImage");
  const modalPrice = document.getElementById("modalItemPrice");
  const modalDesc = document.getElementById("modalItemDesc");
  const variantHintText = document.getElementById("variantHintText");

  // Smooth image swap
  modalImg.style.opacity = "0.4";
  setTimeout(() => {
    modalImg.src = currentSelectedVariant.image;
    modalImg.alt = `${currentModalItem.title} - ${currentSelectedVariant.name}`;
    modalImg.style.opacity = "1";
  }, 120);

  modalPrice.textContent = formatRupiah(currentSelectedVariant.price);
  modalDesc.textContent = currentSelectedVariant.desc || currentModalItem.description;
  variantHintText.textContent = `Varian aktif: ${currentSelectedVariant.name} (${formatRupiah(currentSelectedVariant.price)})`;
}

function closeMenuModal() {
  const modal = document.getElementById("menuModalBackdrop");
  modal.style.display = "none";
  document.body.style.overflow = "";
}

// Direct Order via WhatsApp from Modal
function handleWhatsAppOrderFromModal(cpKey) {
  if (!currentModalItem) return;

  const cp = CONTACT_PERSONS[cpKey] || CONTACT_PERSONS.maria;
  const price = currentSelectedVariant ? currentSelectedVariant.price : currentModalItem.price;
  const variantText = currentSelectedVariant ? ` [Varian: ${currentSelectedVariant.name}]` : "";

  const waMessage = 
`🎄 *PEMESANAN KULINER NATAL - TI IIK BHAKTA* 🎄
--------------------------------------------
Halo ${cp.name}, saya melihat menu di website dan ingin memesan:

🍽️ *Menu:* ${currentModalItem.title}${variantText}
💰 *Harga:* ${formatRupiah(price)}
📦 *Porsi:* ${currentModalItem.portion}

🚚 *Jadwal Pengiriman:* Jumat, 23 Oktober 2026

Bisa tolong dibantu info pemesanan dan metode pembayarannya ya kak? Terima kasih banyak! 🙏✨`;

  const encodedUrl = `https://wa.me/${cp.phone}?text=${encodeURIComponent(waMessage)}`;
  window.open(encodedUrl, "_blank");
  showToast(`Membuka WhatsApp ke ${cp.name}...`);
}

// ================= EVENT LISTENERS =================
function setupEventListeners() {
  // Category tabs
  const catTabs = document.querySelectorAll(".cat-tab");
  catTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      catTabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      activeCategory = tab.dataset.category;
      renderMenuGrid();
    });
  });

  // Search Input
  const searchInput = document.getElementById("menuSearchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      clearBtn.style.display = searchQuery ? "block" : "none";
      renderMenuGrid();
    });
  }
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      clearBtn.style.display = "none";
      renderMenuGrid();
      searchInput.focus();
    });
  }

  // Modal controls
  document.getElementById("closeMenuModalBtn").addEventListener("click", closeMenuModal);
  document.getElementById("menuModalBackdrop").addEventListener("click", (e) => {
    if (e.target.id === "menuModalBackdrop") closeMenuModal();
  });

  // Direct WA buttons inside modal
  const modalMariaBtn = document.getElementById("modalOrderMariaBtn");
  const modalYessyBtn = document.getElementById("modalOrderYessyBtn");
  if (modalMariaBtn) {
    modalMariaBtn.addEventListener("click", () => handleWhatsAppOrderFromModal("maria"));
  }
  if (modalYessyBtn) {
    modalYessyBtn.addEventListener("click", () => handleWhatsAppOrderFromModal("yessy"));
  }

  // ESC key closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenuModal();
    }
  });

  // Delivery Alert click notification
  const deliveryAlert = document.getElementById("deliveryAlert");
  if (deliveryAlert) {
    deliveryAlert.addEventListener("click", () => {
      showToast("🚚 Pengiriman serentak: Jumat, 23 Oktober 2026 di Kampus IIK Bhakta!");
    });
  }
}

// ================= TOAST NOTIFICATION =================
let toastTimeout = null;
function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// ================= FESTIVE LIGHTWEIGHT SNOW EFFECT =================
let snowAnimationId = null;
let isSnowActive = true;

function initSnowEffect() {
  const canvas = document.getElementById("snowCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Update canvas size on resize
  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);

  // Snowflake symbols for variety
  const snowSymbols = ["❄", "❅", "❆", "✦", "•"];

  const flakesCount = Math.min(80, Math.floor(width / 14));
  const flakes = [];

  for (let i = 0; i < flakesCount; i++) {
    flakes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 14 + 6,        // 6-20px font size
      symbol: snowSymbols[Math.floor(Math.random() * snowSymbols.length)],
      speed: Math.random() * 1.2 + 0.4,     // fall speed
      drift: Math.random() * Math.PI * 2,   // horizontal drift phase
      driftSpeed: Math.random() * 0.015 + 0.005,
      opacity: Math.random() * 0.5 + 0.4    // 0.4 - 0.9 opacity
    });
  }

  function renderSnow() {
    if (!isSnowActive) return;
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < flakes.length; i++) {
      const f = flakes[i];

      ctx.save();
      ctx.globalAlpha = f.opacity;
      ctx.font = f.size + "px serif";
      ctx.shadowColor = "rgba(100, 140, 180, 0.5)";
      ctx.shadowBlur = 3;
      ctx.fillStyle = "#b0c8e8";  // light blue-grey, visible on cream bg
      ctx.fillText(f.symbol, f.x, f.y);
      ctx.restore();

      // Update position
      f.y += f.speed;
      f.x += Math.sin(f.drift) * 0.6;
      f.drift += f.driftSpeed;

      // Reset when below visible area
      if (f.y > height + 20) {
        f.x = Math.random() * width;
        f.y = -20;
      }
    }
    snowAnimationId = requestAnimationFrame(renderSnow);
  }

  renderSnow();

  // Toggle button
  const toggleSnowBtn = document.getElementById("toggleSnowBtn");
  const snowStateLabel = document.getElementById("snowStateLabel");
  if (toggleSnowBtn) {
    toggleSnowBtn.addEventListener("click", () => {
      isSnowActive = !isSnowActive;
      if (snowStateLabel) {
        snowStateLabel.textContent = isSnowActive ? "Aktif" : "Mati";
      }
      if (isSnowActive) {
        renderSnow();
      } else {
        cancelAnimationFrame(snowAnimationId);
        ctx.clearRect(0, 0, width, height);
      }
    });
  }
}

// ================= CHRISTMAS MUSIC (MP3) =================
function initChristmasMusic() {
  const audioFile = "Christmas Background Music For Videos _ Royalty Free - _Tis the Season_.mp3";
  const audio = new Audio(audioFile);
  audio.loop = true;
  audio.volume = 0.4; // 40% volume — pleasant background level
  audio.preload = "auto";

  let playing = true;
  let started = false;

  function startMusic() {
    if (started) return;
    audio.play().then(() => {
      started = true;
      console.log("[Music] ♪ Now playing: 'Tis the Season");
    }).catch(() => {
      // Autoplay blocked — will retry on next interaction
      console.log("[Music] Autoplay blocked, waiting for interaction...");
    });
  }

  // Try autoplay immediately
  startMusic();

  // Fallback: start on first user interaction (browser policy)
  function onFirstInteract() {
    if (!started && playing) {
      audio.play().then(() => {
        started = true;
        console.log("[Music] ♪ Started after user interaction");
      }).catch(err => console.warn("[Music] Play failed:", err));
    }
  }
  ["click", "touchstart", "scroll", "keydown"].forEach(ev =>
    document.addEventListener(ev, onFirstInteract, { passive: true })
  );

  // Toggle button
  const btn = document.getElementById("toggleMusicBtn");
  const lbl = document.getElementById("musicStateLabel");
  if (btn) {
    btn.addEventListener("click", () => {
      playing = !playing;
      if (lbl) lbl.textContent = playing ? "Aktif" : "Mati";
      if (playing) {
        audio.volume = 0.4;
        audio.play().then(() => {
          started = true;
          console.log("[Music] ♪ Music resumed");
        });
      } else {
        audio.pause();
        console.log("[Music] Music paused");
      }
    });
  }
}

