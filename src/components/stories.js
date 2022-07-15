function StoryFrame(props) {
    return (
        <div class="story-frame">
            <div class="story">
                <img class="stories-background" src="img/stories-background.png" alt="stories-background" />
                <img class="story-image" src={props.img} alt={props.alt} />
            </div>
            <div class="story-name">
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default function Stories() {
    return (
        <div class="stories">
            <div class="main-stories">
                <StoryFrame img="../img/9gag.png" alt="9gag" name="9gag" />
                <StoryFrame img="../img/meowed.png" alt="meowed" name="meowed" />
                <StoryFrame img="../img/barked.png" alt="barked" name="barked" />
                <StoryFrame img="../img/strangeplanet.png" alt="strangeplanet" name="nathanwpyle..." />
                <StoryFrame img="../img/wawawiwa.png" alt="wawawiwa" name="wawawiwa..." />
                <StoryFrame img="../img/respondeai.png" alt="respondeai" name="respondeai" />
                <StoryFrame img="../img/filomoderna.png" alt="filomoderna" name="filomoderna" />
            </div>
            <ion-icon class="hover desktop-nav-icon" name="chevron-forward-circle"></ion-icon>
            <div class="half-story-frame">
                <div class="half-story">
                    <img class="stories-background" src="img/stories-background.png" alt="stories-background" />
                    <img class="story-image" src="../img/memeriaougourmet.png" alt="memeriaougourmet" />
                </div>
                <div class="half-story-name">
                    <p>memeriaougourmet</p>
                </div>
            </div>
        </div >
    )
}