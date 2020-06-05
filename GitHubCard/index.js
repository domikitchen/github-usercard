
const cards = document.querySelector('.cards');

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
function getUser(usename) {
  const promise = axios.get(`https://api.github.com/users/${usename}`)
    promise.then((response) => {
      console.log(response.data);

      const userData = response.data;

      cards.appendChild(cardMaker({ avatar_url: userData.avatar_url, name: userData.name, login: userData.login, location: userData.location, html_url: userData.html_url, followers: userData.followers, following: userData.following, bio: userData.bio }));

    })
    .catch((error) => {
      console.log(error);
    });
}

getUser('domikitchen');
getUser('Aaroneld');
getUser('Ladrillo');

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker(atties) {
  
  const { avatar_url, name, login, location, html_url, followers, following, bio } = atties;

  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const uname = document.createElement('h3');
  const username = document.createElement('p');
  const locat = document.createElement('p');
  const profile = document.createElement('p');
  const githubAdress = document.createElement('a');
  const follow = document.createElement('p');
  const followed = document.createElement('p');
  const biog = document.createElement('p');

  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(uname);
  cardInfo.appendChild(username);
  cardInfo.appendChild(locat);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(follow);
  cardInfo.appendChild(followed);
  cardInfo.appendChild(biog);
  profile.appendChild(githubAdress);

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  uname.classList.add('name');
  username.classList.add('username');

  userImg.src = avatar_url;
  uname.innerHTML = name;
  username.innerHTML = login;
  locat.innerHTML = `Location: ${location}`;
  githubAdress.src = html_url;
  profile.innerHTML = `Profile: ${githubAdress.innerHTML = html_url}`;
  follow.innerHTML = followers;
  followed.innerHTML = following;
  biog.innerHTML = `Bio: ${bio}`;


  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
