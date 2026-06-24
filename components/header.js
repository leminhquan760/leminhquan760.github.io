class TDDHeader extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname.replace(/^\/|\/$/g, '') || 'home';
        this.innerHTML = `
        <div class="topbar">
		<div class="container">
			<header class="navbar" role="banner">
				<div class="brand">
					<a href="/home" class="logo" aria-label="Thành Đô University">
						<img src="../media/logo TDD.svg" alt="Logo Thành Đô" />
					</a>
					<div class="brand-text">
						<div class="title">TRƯỜNG ĐẠI HỌC THÀNH ĐÔ</div>
						<div class="subtitle">HỆ ĐẠI HỌC LIÊN THÔNG</div>
					</div>
				</div>

				<nav class="primary" role="navigation" aria-label="Main Navigation">
					<a href="/home/#gioithieu">Giới thiệu</a>
					<a href="/home/#nganh">Ngành đào tạo</a>
					<a href="https://thanhdo.edu.vn/dai-hoc-lien-thong" target="_blank">Thông tin tuyển sinh</a>
					<a href="/home/#hoso">Hồ sơ đăng ký</a>
				</nav>

				<div class="nav-actions">
					<a href="/${currentPath}#dangky" class="cta">Đăng ký ngay!</a>
					<button class="hamburger" id="hamburger" aria-controls="mobile-menu" aria-expanded="false"
						aria-label="Mở menu">☰</button>
				</div>
			</header>
			<div id="mobile-menu" class="mobile-menu" role="menu" aria-hidden="true">
				<a href="/home/#gioithieu" role="menuitem">Giới thiệu</a>
				<a href="/home/#nganh" role="menuitem">Ngành đào tạo</a>
				<a href="https://thanhdo.edu.vn/dai-hoc-lien-thong" target="_blank" role="menuitem">Thông tin tuyển sinh</a>
				<a href="/home/#hoso" role="menuitem">Hồ sơ đăng ký</a>
				<a href="/${currentPath}#dangky" role="menuitem">Đăng ký ngay!</a>
			</div>
		</div>
	</div>
        `;
    }
}

customElements.define("tdd-header", TDDHeader);