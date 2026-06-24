class NonAutoBanners extends HTMLElement {
  constructor() {
    super();
    this.currentIndex = 0;
    this.items = [
      {
        src: "../media/banners/BannerWeb2.jpg",
        alt: "Banner Đại học từ xa",
      },
      {
        src: "../media/banners/Banner Tuyển sinh 2026.jpg",
        alt: "Banner tuyển sinh 2026",
      },
      {
        src: "../media/banners/Banner-TDD_QS-Stars-scaled.jpg",
        alt: "Banner trường Đại học Thành Đô",
      }
    ];
  }

  connectedCallback() {
    this.render();
    this.bindEvents();
    this.showSlide(0);
  }

  render() {
    this.innerHTML = `
      <section class="non-auto-banners" aria-label="Banner tuyển sinh">
        <div class="non-auto-banners__frame">
          <div class="non-auto-banners__track">
            ${this.items.map((item, index) => `
              <div class="non-auto-banners__slide ${index === 0 ? "is-active" : ""}" data-index="${index}" aria-hidden="${index === 0 ? "false" : "true"}">
                <img src="${item.src}" alt="${item.alt}" />
              </div>
            `).join("")}
          </div>
        </div>
        <div class="non-auto-banners__controls">
          <button class="non-auto-banners__btn" type="button" data-action="prev" aria-label="Banner trước">‹</button>
          <div class="non-auto-banners__dots" role="tablist" aria-label="Chuyển banner">
            ${this.items.map((_, index) => `
              <button class="non-auto-banners__dot ${index === 0 ? "is-active" : ""}" type="button" data-index="${index}" aria-label="Chuyển đến banner ${index + 1}" aria-selected="${index === 0 ? "true" : "false"}"></button>
            `).join("")}
          </div>
          <button class="non-auto-banners__btn" type="button" data-action="next" aria-label="Banner tiếp theo">›</button>
        </div>
      </section>
    `;
  }

  bindEvents() {
    const controls = this.querySelector(".non-auto-banners__controls");
    if (!controls) return;

    controls.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;

      if (button.dataset.action === "prev") {
        this.showSlide(this.currentIndex - 1);
      } else if (button.dataset.action === "next") {
        this.showSlide(this.currentIndex + 1);
      } else if (button.dataset.index !== undefined) {
        this.showSlide(Number(button.dataset.index));
      }
    });
  }

  showSlide(index) {
    const slides = this.querySelectorAll(".non-auto-banners__slide");
    const dots = this.querySelectorAll(".non-auto-banners__dot");

    this.currentIndex = (index + this.items.length) % this.items.length;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === this.currentIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", isActive ? "false" : "true");
    });

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === this.currentIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }
}

customElements.define("non-auto-banners", NonAutoBanners);
