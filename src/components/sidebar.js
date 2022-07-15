const infoSideBar = [
  "Sobre",
  "Ajuda",
  "Imprensa",
  "API",
  "Carreiras",
  "Privacidade",
  "Termos",
  "Localizações",
  "Contas mais relevantes",
  "Hashtags",
  "Idioma",
];
export default function SideBar() {
  return (
    <div class="side-bar">
      <div class="head-side-bar">
        <img src="img/catancomics.png" alt="catancomics" />
        <div class="head-content">
          <h3>catanacomics</h3>
          <p>Catana</p>
        </div>
      </div>
      <div class="line-side-bar"></div>
      <div class="suggestions-side-bar">
        <div class="suggestions">
          <p>Sugestões para você</p>
          <span>Ver tudo</span>
        </div>
        <div class="follows">
          <div class="suggestions-follows">
            <div class="users">
              <img src="img/bad-vibes.png" alt="bad-vibes" />
              <div class="phrase-container">
                <p>bad.vibes.memes</p>
                <span>Segue você</span>
              </div>
              <span class="hover">Seguir</span>
            </div>
          </div>
          <div class="suggestions-follows">
            <div class="users">
              <img src="img/chibidart.png" alt="chibidart" />
              <div class="phrase-container">
                <p>chibirdart</p>
                <span>Segue você</span>
              </div>
              <span class="hover">Seguir</span>
            </div>
          </div>
          <div class="suggestions-follows">
            <div class="users">
              <img
                src="img/razoesparaacreditar.png"
                alt="razoesparaacreditar"
              />
              <div class="phrase-container">
                <p>razoesparaacreditar</p>
                <span>Novo no Instagram</span>
              </div>
              <span class="hover">Seguir</span>
            </div>
          </div>
          <div class="suggestions-follows">
            <div class="users">
              <img src="img/adorableanimals.png" alt="adorableanimals" />
              <div class="phrase-container">
                <p>adorable_animals</p>
                <span>Segue você</span>
              </div>
              <span class="hover">Seguir</span>
            </div>
          </div>
          <div class="suggestions-follows">
            <div class="users">
              <img src="img/smallcutecats.png" alt="smallcutecats" />
              <div class="phrase-container">
                <p>smallcutecats</p>
                <span>Segue você</span>
              </div>
              <span class="hover">Seguir</span>
            </div>
          </div>
        </div>
      </div>
      <div class="info-side-bar">
        <p>
          {infoSideBar.map((text) => (
            <a href="https://www.instagram.com/">{text}</a>
          ))}
          •
        </p>
      </div>
      <div class="brand-side-bar">
        <p>© 2021 INSTAGRAM DA DRIVEN</p>
      </div>
    </div>
  );
}
