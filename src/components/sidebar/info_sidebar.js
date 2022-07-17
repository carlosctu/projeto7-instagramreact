import SugestionFollows from "./sugestion_follows";

const infoSideBar = [
  "Sobre •",
  "Ajuda •",
  "Imprensa •",
  "API •",
  "Carreiras •",
  "Privacidade •",
  "Termos •",
  "Localizações •",
  "Contas mais relevantes •",
  "Hashtags •",
  "Idioma",
];
function UserAccount(props) {
  return (
    <div class="head-side-bar">
      <img src={props.userProfileImg} alt={props.userProfileImgAlt} />
      <div class="head-content">
        <h3>{props.userNickName}</h3>
        <p>{props.username}</p>
      </div>
    </div>
  );
}

export default function SideBar() {
  return (
    <div class="side-bar">
      <UserAccount
        username="Catana"
        userNickName="catanacomics"
        userProfileImg="../img/catancomics.png"
        userProfileImgAlt="catacomics"
      />
      <div class="line-side-bar"></div>
      <SugestionFollows />
      <div class="info-side-bar">
        <p>
          {infoSideBar.map((text, index) => (
            <a key={index} href="https://www.instagram.com/">
              {text}
            </a>
          ))}
        </p>
      </div>
      <div class="brand-side-bar">
        <p>© 2021 INSTAGRAM DA DRIVEN</p>
      </div>
    </div>
  );
}
