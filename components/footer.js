class TDDFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="site-footer">
		<div class="container footer-main">
			<div class="footer-logo">
				<img src="/media/logo TDD.svg" alt="Logo Thành Đô" />
			</div>

			<div class="footer-contact">
				<h3>Trường Đại học Thành Đô</h3>
				<a class="footer-contact-item">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/></svg>
					0934 078 668 - 0243 386 1601
				</a>
				<a class="footer-contact-item" href="mailto:daihocthanhdo@thanhdouni.edu.vn">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2 5a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 .35V6l8 5.4L20 6v-.65l-8 5.4-8-5.4z"/></svg>
					daihocthanhdo@thanhdouni.edu.vn
				</a>
				<a class="footer-contact-item" href="https://thanhdo.edu.vn" target="_blank" rel="noopener">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.93 6h-2.95a15.6 15.6 0 00-1.38-3.56A8.03 8.03 0 0118.93 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14A7.93 7.93 0 014 12c0-.69.1-1.36.26-2h3.38c-.09.66-.14 1.32-.14 2s.05 1.34.14 2H4.26zm.81 2h2.95c.32 1.25.78 2.45 1.38 3.56A8.03 8.03 0 015.07 16zm2.95-8H5.07a8.03 8.03 0 014.33-3.56A15.6 15.6 0 008.02 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.36 14H9.64A12.9 12.9 0 019.5 12c0-.68.05-1.35.14-2h4.72c.09.65.14 1.32.14 2s-.05 1.34-.14 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.09-.66.14-1.32.14-2s-.05-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
					thanhdo.edu.vn
				</a>
				<a class="footer-contact-item" href="https://maps.app.goo.gl/j77HL1qVaPQR52tVA" target="_blank" rel="noopener">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"/></svg>
					Km15 Quốc lộ 32, Xã Hoài Đức, Hà Nội
				</a>
			</div>

			<div class="footer-social">
				<a class="footer-social-btn" href="https://www.facebook.com/truongdaihocthanhdo" target="_blank" rel="noopener" aria-label="Facebook">
					<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94z"/></svg>
				</a>
				<a class="footer-social-btn" href="https://www.youtube.com/channel/UCHW97NbF7XrYqbEuvFQlfZQ/videos" target="_blank" rel="noopener" aria-label="YouTube">
					<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 6.2s-.23-1.64-.94-2.36c-.9-.95-1.91-.95-2.37-1.01C16.9 2.5 12 2.5 12 2.5h-.01s-4.89 0-8.18.33c-.46.06-1.47.06-2.37 1.01C.73 4.56.5 6.2.5 6.2S.26 8.13.26 10.05v1.79c0 1.93.24 3.85.24 3.85s.23 1.64.94 2.36c.9.95 2.08.92 2.61 1.02 1.9.18 8 .33 8 .33s4.9-.01 8.19-.34c.46-.06 1.47-.06 2.37-1.01.71-.72.94-2.36.94-2.36s.24-1.93.24-3.85v-1.79c0-1.93-.24-3.85-.24-3.85zM9.55 14.6V7.7l6.49 3.46-6.49 3.44z"/></svg>
				</a>
				<a class="footer-social-btn" href="https://www.instagram.com/thanhdo.uni/" target="_blank" rel="noopener" aria-label="Instagram">
					<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.46.66.25 1.21.6 1.76 1.15.5.5.85 1.05 1.15 1.76.24.64.41 1.37.46 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.46 2.43-.25.66-.6 1.21-1.15 1.76-.5.5-1.05.85-1.76 1.15-.64.24-1.37.41-2.43.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.46a4.93 4.93 0 01-1.76-1.15 4.93 4.93 0 01-1.15-1.76c-.24-.64-.41-1.37-.46-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.46-2.43.25-.66.6-1.21 1.15-1.76A4.93 4.93 0 015.43 2.54c.64-.24 1.37-.41 2.43-.46C8.94 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.86.04-1.33.18-1.64.3-.41.16-.71.35-1.02.66-.31.31-.5.61-.66 1.02-.12.31-.26.78-.3 1.64C4.29 9.01 4.28 9.33 4.28 12s.01 2.99.06 4.04c.04.86.18 1.33.3 1.64.16.41.35.71.66 1.02.31.31.61.5 1.02.66.31.12.78.26 1.64.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.86-.04 1.33-.18 1.64-.3.41-.16.71-.35 1.02-.66.31-.31.5-.61.66-1.02.12-.31.26-.78.3-1.64.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.86-.18-1.33-.3-1.64-.16-.41-.35-.71-.66-1.02a2.78 2.78 0 00-1.02-.66c-.31-.12-.78-.26-1.64-.3-1.05-.05-1.37-.06-4.04-.06zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm5.4-2.5a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1z"/></svg>
				</a>
				<a class="footer-social-btn" href="https://zalo.me/daihocthanhdo" target="_blank" rel="noopener" aria-label="Zalo">Zalo</a>
			</div>
		</div>

		<div class="footer-bottom">
			Copyright © 2026 Thành Đô University
		</div>
	</footer>
        `;
    }
}

customElements.define("tdd-footer", TDDFooter);