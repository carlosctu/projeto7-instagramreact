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
      {icons.map((icon) => (
        <ion-icon name={icon}></ion-icon>
      ))}
    </div>
  );
}
