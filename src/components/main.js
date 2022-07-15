import Posts from "./posts"
import Stories from "./stories"

export default function Main() {
    return (
        <div class="main">
            <div class="main-container">
                <div class="feed">
                    <Stories />
                    <Posts />
                </div>
                <div class="space"></div>
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
                                    <img src="img/razoesparaacreditar.png" alt="razoesparaacreditar" />
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
                            <a href="https://www.instagram.com/">Sobre</a> •
                            <a href="https://www.instagram.com/">Ajuda</a> •
                            <a href="https://www.instagram.com/">Imprensa</a> •
                            <a href="https://www.instagram.com/">API</a> •
                            <a href="https://www.instagram.com/">Carreiras</a> •
                            <a href="https://www.instagram.com/">Privacidade</a> •
                            <a href="https://www.instagram.com/">Termos</a> •
                            <a href="https://www.instagram.com/">Localizações</a> •
                            <a href="https://www.instagram.com/">Contas mais relevantes</a> •
                            <a href="https://www.instagram.com/">Hashtags</a> •
                            <a href="https://www.instagram.com/">Idioma</a>
                        </p>
                    </div>
                    <div class="brand-side-bar">
                        <p>© 2021 INSTAGRAM DA DRIVEN</p>
                    </div>
                </div>
            </div>
        </div>
    )
}