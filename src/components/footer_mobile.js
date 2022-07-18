import React, { Component }  from 'react';
const icons = [
  "home",
  "search-outline",
  "add-circle-outline",
  "heart-outline",
  "person-outline"
];

export default function FooterMobile() {
  return (
    <div class="footer-mobile">
      {icons.map((icon,index) => (
        <ion-icon key={index} name={icon}></ion-icon>
      ))}
    </div>
  );
}
