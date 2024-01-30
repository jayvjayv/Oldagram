//DOM Elements needed
const root = document.getElementById("root");

function createPost(data) {
  root.append(getProfile(data));
  root.append(getPost(data));
  root.append(getEngagements());
  root.append(getLikes(data));
  root.append(getAccountDetails(data));
  root.append(addDivider());
}

function getProfile(data) {
  let section = document.createElement("section");

  let divOne = document.createElement("div");
  let image = document.createElement("img");

  let divTwo = document.createElement("div");
  let h2 = document.createElement("h2");
  let h3 = document.createElement("h3");

  divOne.setAttribute("class", "user-profile-top");
  image.setAttribute("src", `${data.avatar}`);
  image.setAttribute("class", "user-avatar");
  divTwo.setAttribute("class", "user-real-details");

  h2.textContent = data.name;
  h3.textContent = data.location;

  divOne.append(image);
  divTwo.append(h2);
  divTwo.append(h3);
  divOne.append(divTwo);

  section.append(divOne);

  return section;
}

function getPost(data) {
  let section = document.createElement("section");
  let divOne = document.createElement("div");
  let image = document.createElement("img");

  image.setAttribute("src", `${data.post}`);
  image.setAttribute("class", "user-post-photo");

  divOne.append(image);
  section.append(divOne);

  return section;
}

function getEngagements() {
  let section = document.createElement("section");
  let divOne = document.createElement("div");

  let heartImage = document.createElement("img");
  let commentImage = document.createElement("img");
  let dmImage = document.createElement("img");

  divOne.setAttribute("class", "user-engagements");

  heartImage.setAttribute("src", "./src/images/icon-heart.png");
  commentImage.setAttribute("src", "./src/images/icon-comment.png");
  dmImage.setAttribute("src", "./src/images/icon-dm.png");

  divOne.append(heartImage);
  divOne.append(commentImage);
  divOne.append(dmImage);

  section.append(divOne);

  return section;
}

function getLikes(data) {
  let section = document.createElement("section");
  let h2 = document.createElement("h2");

  h2.setAttribute("class", "user-likes");
  h2.textContent = `${data.likes} likes`;
  

  section.append(h2);

  return section;
}

function getAccountDetails(data){

    let section = document.createElement("section");
    let divOne = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");

    divOne.setAttribute("class", "user-account-details");
    h3.textContent = `${data.username}`;
    p.textContent = `${data.comment}`;

    divOne.append(h3);
    divOne.append(p);

    section.append(divOne);

    return section;
}

function addDivider(){

    let footer = document.createElement("footer");
    
    return footer;

}



for (let i = 0; i < posts.length; i++) {
  createPost(posts[i]);
}
