function Post(props) {
  const postIcons = [
    "heart-outline",
    "chatbubble-outline",
    "paper-plane-outline",
  ];
  const comments = [
    {
      user: props.firstUserComment,
      comment: props.firstComment,
    },
    {
      user: props.SecondUserComment,
      comment: props.SecondComment,
    },
  ];
  return (
    <div class="post">
      <div class="post-account">
        <div>
          <img src={props.profilePic} alt={props.profilePicAlt} />
          <p>{props.profilePicName}</p>
        </div>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
      <div class="post-line"></div>
      <div class="post-picture">
        <img src={props.postPicture} alt={props.altPicture} />
      </div>
      <div class="post-icons">
        <div class="l-k-s">
          {postIcons.map((icon) => (
            <ion-icon name={icon}></ion-icon>
          ))}
        </div>
        <div class="save">
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>
      <div class="post-likes">
        <div>
          <img src={props.firstLikePic} alt={props.firstLikePicAlt} />
          <p class="likes-about">
            Curtido por <strong> {props.likedBy}</strong> e
            <strong> outras {props.likes} pessoas</strong>
          </p>
        </div>
        <div class="post-caption">
          <p class="underlined">
            <strong> {props.profilePicName}</strong>
          </p>
          <span>{props.postCaption}</span>
        </div>
        <div class="post-comments">
          <p>Ver todos os {props.commentsNum} comentários</p>
          {comments.map((comment) => (
            <div class="user-comment">
              <span class="underlined">
                <strong>{comment.user}</strong>
              </span>
              <p>{comment.comment}</p>
            </div>
          ))}
          <span class="more">{props.postTime}</span>
        </div>
        <div class="post-people-comments">
          <div>
            <ion-icon class="hover" name="happy-outline"></ion-icon>
            <p class="hover">Adicione um comentário...</p>
          </div>
          <span class="hover">Publicar</span>
        </div>
      </div>
    </div>
  );
}
export default function Posts() {
  return (
    <div class="posts">
      <Post
        profilePic="../img/meowed-2.png"
        profilePicAlt="meowed-2"
        profilePicName="meowed"
        postPicture="../img/meowed-3.png"
        postCaption="❄️ ❄️"
        altPicture="gato-telefone"
        firstLikePic="../img/respondeai.png"
        firstLikePicAlt="respondeai"
        likedBy="respondeiAi"
        likes="101.523"
        commentsNum="4,133"
        firstUserComment="twan"
        firstComment="What a beauty!😍"
        SecondUserComment="candidev"
        SecondComment="What an elegance!"
        postTime="HÁ 15 MINUTOS"
      />
      ,
      <Post
        profilePic="../img/barked.png"
        profilePicAlt="barked"
        profilePicName="barked"
        postPicture="../img/golden-puppie.png"
        postCaption="Enough pupparazzi"
        altPicture="golden-puppie"
        firstLikePic="../img/respondeai.png"
        firstLikePicAlt="respondeai"
        likedBy="respondeiAi"
        likes="791.149"
        commentsNum="324,133"
        firstUserComment="tillietheshep"
        firstComment="Does lil man have a license to be so cute?!"
        SecondUserComment="oleadoggies"
        SecondComment="OMG! Cute!!"
        postTime="HÁ 4 HORAS"
      />
      ,
      <Post
        profilePic="../img/9gag.png"
        profilePicAlt="9gag"
        profilePicName="9gag"
        postPicture="../img/9gag.png"
        postCaption="Enough pupparazzi"
        altPicture="golden-puppie"
        firstLikePic="../img/respondeai.png"
        firstLikePicAlt="respondeai"
        likedBy="respondeiAi"
        likes="791.149"
        commentsNum="324,133"
        firstUserComment="tillietheshep"
        firstComment="Does lil man have a license to be so cute?!"
        SecondUserComment="oleadoggies"
        SecondComment="OMG! Cute!!"
        postTime="HÁ 4 HORAS"
      />
    </div>
  );
}
