/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// const axios = require('axios').default;
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
const cards = document.querySelector('.cards');


axios.get('https://api.github.com/users/j0liver')
.then( (response) => {
  // handle success
  let me = response;
  // console.log(response);
  /// adding response to cards 
  cards.appendChild(gitHubMaker(me.data))

  axios.get(me.data.followers_url)
  .then((response) => {
    let myFollowersUrl =  response;

    myFollowersUrl.data.forEach(person => {
      axios.get(`https://api.github.com/users/${person.login}`)
        .then((response) =>{
          cards.appendChild(gitHubMaker(response.data))
        })
    });
  })
})
.catch(error => {
  console.log('error');
})




/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
function gitHubMaker(obj){
const card = document.createElement('div');
card.className = 'card'

const profilePic = document.createElement('img');
profilePic.src = obj.avatar_url;

const cardContent = document.createElement('div')
cardContent.className = 'card-info';

const userName = document.createElement('h3');
userName.className = 'name';
userName.textContent = obj.name;

const usersUsername = document.createElement('p');
usersUsername.className = 'username';
usersUsername.textContent = obj.login;

const location = document.createElement('p');
location.textContent = obj.location;

const profile = document.createElement('p')
profile.textContent = 'Profile: '
const link = document.createElement('a')
link.href = obj.html_url;
link.textContent = obj.html_url;
const followers = document.createElement('p')
followers.textContent = `followers: ${obj.followers}`;

const following = document.createElement('p')
following.textContent = `following: ${obj.following}`;

const bio = document.createElement('p');
bio.textContent = `bio: ${obj.bio}`;




card.appendChild(profilePic);
card.appendChild(cardContent);

cardContent.appendChild(userName);
cardContent.appendChild(usersUsername)
cardContent.appendChild(location);
cardContent.appendChild(profile);
cardContent.appendChild(followers);
cardContent.appendChild(following)
cardContent.appendChild(bio)

profile.appendChild(link)

return card;
}



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
