export default function NavBar() {
    return(
        <div class="nav-bar">
        <div class="nav-container">
          <div class="insta-logo desktop-field">
            <a href="https://www.instagram.com/">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <div class="line">
              <div></div>
            </div>
            <a href="https://www.instagram.com/">
              <img src="img/logo.png" alt="Instagram" />
            </a>
          </div>
          <div class="search-field desktop-field">
            <input type="text" placeholder="Pesquisar"  />
          </div>
          <div class="insta-icons desktop-field">
            <ion-icon class="desktop-nav-icon" name="paper-plane-outline"></ion-icon>
            <ion-icon class="desktop-nav-icon" name="compass-outline"></ion-icon>
            <ion-icon class="desktop-nav-icon" name="heart-outline"></ion-icon>
            <ion-icon class="desktop-nav-icon" name="person-outline"></ion-icon>
          </div>
          <div class="nav-mobile">
            <ion-icon class="pointer" name="logo-instagram"></ion-icon>
            <a href="www.instagram.com">
              <img src="img/logo.png" alt="Instagram" />
            </a>
            <ion-icon class="mobile-pointer" name="paper-plane-outline"></ion-icon>
          </div>
        </div>
      </div>
    )
}