let outputContainer = document.getElementById('outputContainer');
let outputText = document.getElementById('outputText');
let contentGrid = document.getElementById('contentGrid');

let albumDatabase = [
  {
    "username" : "everyday_justice",
    "pfp_src" : "https://static.vecteezy.com/system/resources/thumbnails/007/015/623/small/supreme-court-judiciary-social-media-banner-judge-in-mantle-and-wig-cartoon-characterwoth-lettering-law-and-justice-on-ribbon-judicial-law-legal-lawsuit-banner-template-flat-illustration-vector.jpg",
    "img_src" : "https://i.ibb.co/SsgcqzT/normalize-tipping-mta-workers.png",
    "caption" : "It's time to raise awareness about this. It's honestly disgusting how many times I go in the train station and I'm the only one who tips the MTA employees. Whether you are getting on the train for your daily commute or if you're just going into the city for fun, tip the MTA employees you come across. Have a beautiful day loves 💙💙",
    "comments" : [
      {
        "comment_user" : "aridhare",
        "comment_text" : "thanks for bringing awareness to this."
      },
      {
        "comment_user" : "mouthserve",
        "comment_text" : "I've been saying this for months"
      },
      {
        "comment_user" : "roastgood",
        "comment_text" : "ur joking"
      },
      {
        "comment_user" : "dodgeballboy",
        "comment_text" : "My uncle works for the MTA. Thank you on his behalf."
      }]
  },
  {
    "username" : "meemees",
    "pfp_src" : "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Meme_Man_on_transparent_background.webp/220px-Meme_Man_on_transparent_background.webp.png",
    "img_src" : "https://preview.redd.it/bs7c3k0vj6o31.jpg?auto=webp&s=467fb8fbaab509eadfb6916fee58847a7ca45205",
    "caption" : "What do you guys think about this? ☕️💕",
    "comments" : [
      {
        "comment_user" : "headlineclowder",
        "comment_text" : "🤣🤣🤣🤣🤣🤣"
      },
      {
        "comment_user" : "deviceslither",
        "comment_text" : "💀💀💀😭😭"
      },
      {
        "comment_user" : "dowdycactus",
        "comment_text" : "the irony..."
      }]
  },
  {
    "username" : "diet__tips.expert_daily",
    "pfp_src" : "http://blogs.oregonstate.edu/linuspaulinginstitute/files/2016/02/DOH-Heart.png",
    "img_src" : "https://i.ibb.co/DDZhz7n/Add-a-heading.png",
    "caption" : "Like and share the post. Follow @diet__tips.expert_daily. Look at the difference you can make in your life when you stop drinking orange juice.",
    "comments" : [
      {
        "comment_user" : "cornerdonkey",
        "comment_text" : "interesting. i'll have to check this out"
      },
      {
        "comment_user" : "opinionbagel",
        "comment_text" : "fake news"
      }]
  },
  {
    "username" : "abbyabby",
    "pfp_src" : "https://images.generated.photos/4AHYUuv9jue9EQieJwy3mt_rMyjhBP0LUUUO8rFNz5M/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wMDk1/OTAzLmpwZw.jpg",
    "img_src" : "https://i.ibb.co/KrP4F9h/Sugar-Bear-Hair-Vitamins-Review-1.png",
    "img_overlay_src" : "https://img.buzzfeed.com/buzzfeed-static/static/2016-09/29/11/asset/buzzfeed-prod-fastlane03/sub-buzz-23440-1475163338-1.png?output-format=auto&output-quality=auto",
    "caption" : "#ad My teeth have gotten so much shinier and healthier since I started taking these SaltyPearTeeth vitamins! They also taste amazing :)",
    "comments" : [
      {
        "comment_user" : "sesamekhakis",
        "comment_text" : "i'm your biggest fan"
      },
      {
        "comment_user" : "pizzaairplane",
        "comment_text" : "these made all my teeth fall out"
      },
      {
        "comment_user" : "irritatingpaver",
        "comment_text" : "These taste awful!!!"
      },
      {
        "comment_user" : "fadefence",
        "comment_text" : "Canada loves you <3 <3 <3"
      }]
  },
  {
    "username" : "funnydailymemes",
    "pfp_src" : "https://i.kym-cdn.com/photos/images/newsfeed/001/414/459/230.jpg",
    "img_src" : "https://i.redd.it/oy22h74koaw11.jpg",
    "caption" : "Comment your thoughts down below! 🧡",
    "comments" : [
      {
        "comment_user" : "crucialromantic",
        "comment_text" : "lmOAOOOOOOO"
      },
      {
        "comment_user" : "spiritlasagna",
        "comment_text" : "😂😂😂😂😂😂"
      },
      {
        "comment_user" : "chickenfrog",
        "comment_text" : "great content! funny! keep it up!"
      },
      {
        "comment_user" : "statisticparmesan",
        "comment_text" : "I saw this post on Facebook"
      }]
  },
  {
    "username" : "health_fitness_gram",
    "pfp_src" : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gym-fitness-instagram-profile-photo-logo-design-template-4250d240b809171646df440d2a18af44_screen.jpg?ts=1600061299",
    "img_src" : "https://i.ibb.co/D8MgdyQ/Did-you-know.png",
    "caption" : "Say no to sugar. Join me in losing over 60% of our body fat by cutting unneccesary sugars!",
    "comments" : [
      {
        "comment_user" : "mustardraisins",
        "comment_text" : "Yes! Thanks for the tips. I'll be doing this diet"
      },
      {
        "comment_user" : "pebblefatigue",
        "comment_text" : "One of the circles just says 'No'. Is that right?"
      },
      {
        "comment_user" : "speaksparkles",
        "comment_text" : "last week you were just telling us to bulk to gain muscle?"
      },
      {
        "comment_user" : "squadronfire",
        "comment_text" : "HELL YEAH no pain no gain!!! great stuff dude"
      }]
  },
  {
    "username" : "speak.out.now",
    "pfp_src" : "https://milwaukeesynod.org/wp-content/uploads/slot1.jpg",
    "img_src" : "https://i.ibb.co/YcG4pJR/If-you-play.png",
    "caption" : "This is pretty self explanatory. The white supremacist undertones of this game are undeniable. Swipe through for sources. Let me know in the comments if you have any questions.",
    "comments" : [
      {
        "comment_user" : "crucialromantic",
        "comment_text" : "omg i always thought this"
      },
      {
        "comment_user" : "spiritlasagna",
        "comment_text" : "no way yall believe this is real"
      },
      {
        "comment_user" : "chickenfrog",
        "comment_text" : "these have gone too far"
      },
      {
        "comment_user" : "statisticparmesan",
        "comment_text" : "thank goodness someone said it! I've been WAITING for this post"
      }]
  }
];

for (var i=0;i<albumDatabase.length;i++){
  createObject(albumDatabase[i]);
}

function createObject(object){
  let newElement = document.createElement("DIV");
  newElement.classList.add('contentItem');

  let userDiv = document.createElement("DIV_username");
    let newUsername = document.createElement("H3");
    newUsername.innerText = '@'+object['username'];
    let newPfp = document.createElement("IMG");
    newPfp.classList.add("pfp");
    newPfp.src = object['pfp_src'];
    userDiv.appendChild(newPfp);
    userDiv.appendChild(newUsername);
  newElement.appendChild(userDiv);



  let newImage = document.createElement("IMG");
    newImage.classList.add("image");
    newImage.src = object['img_src'];
  newElement.appendChild(newImage);

  let newCaption = document.createElement("H4");
    newCaption.innerText = object["username"]+ ": " + object['caption'];
  newElement.appendChild(newCaption);

  let newCommentList = document.createElement("UL");
  for (var i=0;i<object['comments'].length;i++){
    let newCommentUser = document.createElement("LI");
    newCommentUser.innerText = object['comments'][i]['comment_user'] + ": ";

    let newCommentText = document.createElement("SPAN");
    let comment = object['comments'][i]['comment_text'];
    newCommentText.innerText = comment;
    newCommentUser.appendChild(newCommentText);
    newCommentList.appendChild(newCommentUser);
  }
  newElement.appendChild(newCommentList);

  contentGrid.appendChild(newElement);
}
