import React from "react";
function Post(props) {
  let click = 0;
  const postIcons = [
    { name: "chatbubble-outline" },
    { name: "paper-plane-outline" },
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

  const [heartAnimation, setHeartAnimation] = React.useState("post-heart-none");
  let [isLiked, setLiked] = React.useState(false);
  const toogle = () => {
    if (!isLiked) {
      setLiked((prevState) => !prevState);
    }
  };
  function resetHeartAnimation() {
    setHeartAnimation("post-heart-none");
  }
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
        <img
          src={props.postPicture}
          alt={props.altPicture}
          onClick={() => {
            click++;
            if (click === 2) {
              toogle();
              setHeartAnimation("post-heart");
              setTimeout(resetHeartAnimation, 1200);
              click = 0;
            }
          }}
        />
        <ion-icon name="heart" class={heartAnimation}></ion-icon>
      </div>
      <div class="post-icons">
        <div class="l-k-s">
          <ion-icon
            name={isLiked ? "heart" : "heart-outline"}
            class={isLiked ? "heart" : ""}
            onClick={() => {
              setLiked((prevState) => !prevState);
              setHeartAnimation("post-heart-none");
            }}
          ></ion-icon>
          {postIcons.map((icon, index) => (
            <ion-icon key={index} name={icon.name}></ion-icon>
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
          {comments.map((comment, index) => (
            <div key={index} class="user-comment">
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
  const post = [
    {
      profilePic: "../img/meowed-2.png",
      profilePicAlt: "meowed-2",
      profilePicName: "meowed",
      postPicture: "../img/meowed-3.png",
      postCaption: "❄️ ❄️",
      altPicture: "gato-telefone",
      firstLikePic: "../img/respondeai.png",
      firstLikePicAlt: "respondeai",
      likedBy: "respondeAi",
      likes: "101.523",
      commentsNum: "4,133",
      firstUserComment: "twan",
      firstComment: "What a beauty!😍",
      SecondUserComment: "candidev",
      SecondComment: "What an elegance!",
      postTime: "HÁ 15 MINUTOS",
    },
    {
      profilePic: "../img/barked.png",
      profilePicAlt: "barked",
      profilePicName: "barked",
      postPicture: "../img/golden-puppie.png",
      postCaption: "Enough pupparazzi",
      altPicture: "golden-puppie",
      firstLikePic: "../img/respondeai.png",
      firstLikePicAlt: "respondeai",
      likedBy: "respondeiAi",
      likes: "791.149",
      commentsNum: "324,133",
      firstUserComment: "tillietheshep",
      firstComment: "Does lil man have a license to be so cute?!",
      SecondUserComment: "oleadoggies",
      SecondComment: "OMG! Cute!!",
      postTime: "HÁ 4 HORAS",
    },
    {
      profilePic: "../img/9gag.png",
      profilePicAlt: "9gag",
      profilePicName: "9gag",
      postPicture: "../img/9gag_image.png",
      postCaption: "Best starter pack!",
      altPicture: "9gag_pic",
      firstLikePic: "../img/9gag.png",
      firstLikePicAlt: "9gag",
      likedBy: "9gag",
      likes: "121.825",
      commentsNum: "321,371",
      firstUserComment: "amandac",
      firstComment: "So related...",
      SecondUserComment: "chipalita",
      SecondComment: "Just what i need!",
      postTime: "HÁ 12 HORAS",
    },
  ];
  return (
    <div class="posts">
      {post.map((post, index) => (
        <Post
          key={index}
          profilePic={post.profilePic}
          profilePicAlt={post.profilePicAlt}
          profilePicName={post.profilePicName}
          postPicture={post.postPicture}
          postCaption={post.postCaption}
          altPicture={post.altPicture}
          firstLikePic={post.firstLikePic}
          firstLikePicAlt={post.firstLikePicAlt}
          likedBy={post.likedBy}
          likes={post.likes}
          commentsNum={post.commentsNum}
          firstUserComment={post.firstUserComment}
          firstComment={post.firstComment}
          SecondUserComment={post.SecondUserComment}
          SecondComment={post.SecondComment}
        />
      ))}
    </div>
  );
}
