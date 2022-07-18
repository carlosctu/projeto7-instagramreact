import React, { Component }  from 'react';
const userSuggest = [
  {
    name: "bad.vibes.memes",
    nameStatus: "Segue você",
    img: "../img/bad-vibes.png",
    alt: "bad-vibes",
  },
  {
    name: "chibidart",
    nameStatus: "Segue você",
    img: "../img/chibidart.png",
    alt: "chibidart",
  },
  {
    name: "razoesparaacreditar",
    nameStatus: "Novo no Instagram",
    img: "../img/razoesparaacreditar.png",
    alt: "razoesparaacreditar",
  },
  {
    name: "adorableanimals",
    nameStatus: "Segue você",
    img: "../img/adorableanimals.png",
    alt: "adorableanimals",
  },
  {
    name: "smallcutecats",
    nameStatus: "Segue você",
    img: "../img/smallcutecats.png",
    alt: "smallcutecats",
  },
];
function UserFollowSuggest(props) {
  return (
    <div class="suggestions-follows">
      <div class="users">
        <img src={props.img} alt={props.alt} />
        <div class="phrase-container">
          <p>{props.name}</p>
          <span>{props.nameStatus}</span>
        </div>
        <span class="hover">Seguir</span>
      </div>
    </div>
  );
}

export default function SugestionFollows() {
  return (
    <div class="suggestions-side-bar">
      <div class="suggestions">
        <p>Sugestões para você</p>
        <span>Ver tudo</span>
      </div>
      <div class="follows">
        {userSuggest.map((user, index) => (
          <UserFollowSuggest
            key={index}
            name={user.name}
            nameStatus={user.nameStatus}
            img={user.img}
            alt={user.img}
          />
        ))}
      </div>
    </div>
  );
}
