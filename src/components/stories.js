const storyInfo = [
  { img: "../img/9gag.png", alt: "9gag", name: "9gag" },
  { img: "../img/meowed.png", alt: "meowed", name: "meowed" },
  { img: "../img/barked.png", alt: "barked", name: "barked" },
  {
    img: "../img/strangeplanet.png",
    alt: "strangeplanet",
    name: "nathanwpyle...",
  },
  { img: "../img/wawawiwa.png", alt: "wawawiwa", name: "wawawiwa" },
  {
    img: "../img/respondeai.png",
    alt: "respondeai",
    name: "respondeai",
  },
  {
    img: "../img/filomoderna.png",
    alt: "filomoderna",
    name: "filomoderna",
  },
];

function StoryFrame(props) {
  return (
    <div class="story-frame">
      <div class="story">
        <img
          class="stories-background"
          src="img/stories-background.png"
          alt="stories-background"
        />
        <img class="story-image" src={props.img} alt={props.alt} />
      </div>
      <div class="story-name">
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default function Stories() {
  return (
    <div class="stories">
      <div class="main-stories">
        {storyInfo.map((story) => (
          <StoryFrame img={story.img} alt={story.alt} name={story.name} />
        ))}
      </div>
      <ion-icon
        class="hover desktop-nav-icon"
        name="chevron-forward-circle"
      ></ion-icon>
      <div class="half-story-frame">
        <div class="half-story">
          <img
            class="stories-background"
            src="img/stories-background.png"
            alt="stories-background"
          />
          <img
            class="story-image"
            src="../img/memeriaougourmet.png"
            alt="memeriaougourmet"
          />
        </div>
        <div class="half-story-name">
          <p>memeriaougourmet</p>
        </div>
      </div>
    </div>
  );
}
