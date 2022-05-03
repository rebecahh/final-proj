let outputContainer = document.getElementById('outputContainer');
let outputText = document.getElementById('outputText');
let contentGrid = document.getElementById('contentGrid');

let albumDatabase = [
  {
    "username" : "abbyabby",
    "pfp_src" : "https://images.generated.photos/4AHYUuv9jue9EQieJwy3mt_rMyjhBP0LUUUO8rFNz5M/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wMDk1/OTAzLmpwZw.jpg",
    "img_src" : "https://i.ibb.co/KrP4F9h/Sugar-Bear-Hair-Vitamins-Review-1.png",
    "img_overlay_src" : "https://img.buzzfeed.com/buzzfeed-static/static/2016-09/29/11/asset/buzzfeed-prod-fastlane03/sub-buzz-23440-1475163338-1.png?output-format=auto&output-quality=auto",
    "caption" : "#ad My teeth have gotten so much shinier and healthier since I started taking these SaltyPearTeeth vitamins! They also taste amazing :)",
    "comments" : ["i'm your biggest fan", "these made all my teeth fall out", "These taste awful!!!", "Canada loves you <3 <3 <3"]
  },
  {
    "username" : "everyday_justice",
    "pfp_src" : "https://static.vecteezy.com/system/resources/thumbnails/007/015/623/small/supreme-court-judiciary-social-media-banner-judge-in-mantle-and-wig-cartoon-characterwoth-lettering-law-and-justice-on-ribbon-judicial-law-legal-lawsuit-banner-template-flat-illustration-vector.jpg",
    "img_src" : "https://i.ibb.co/SsgcqzT/normalize-tipping-mta-workers.png",
    "caption" : "It's time to raise awareness about this. It's honestly disgusting how many times I go in the train station and I'm the only one who tips the MTA employees. Whether you are getting on the train for your daily commute or if you're just going into the city for fun, tip the MTA employees you come across. Have a beautiful day loves 💙💙",
    "comments" : ["thanks for bringing awareness to this.","I've been saying this for months","ur joking","My uncle works for the MTA. Thank you on his behalf."]
  },
  {
    "username" : "meemees",
    "pfp_src" : "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Meme_Man_on_transparent_background.webp/220px-Meme_Man_on_transparent_background.webp.png",
    "img_src" : "https://preview.redd.it/bs7c3k0vj6o31.jpg?auto=webp&s=467fb8fbaab509eadfb6916fee58847a7ca45205",
    "caption" : "What do you guys think about this? ☕️💕",
    "comments" : ["🤣🤣🤣🤣🤣🤣","💀💀💀😭😭","the irony..."]
  },
  {
    "username" : "funnydailymemes",
    "pfp_src" : "https://i.kym-cdn.com/photos/images/newsfeed/001/414/459/230.jpg",
    "img_src" : "https://i.redd.it/oy22h74koaw11.jpg",
    "caption" : "Comment your thoughts down below! 🧡",
    "comments" : ["lmOAOOOOOOO","😂😂😂😂😂😂","I saw this post on Facebook"]
  },
  {
    "username" : "speak.out.now",
    "pfp_src" : "https://milwaukeesynod.org/wp-content/uploads/slot1.jpg",
    "img_src" : "https://i.ibb.co/YcG4pJR/If-you-play.png",
    "caption" : "This is pretty self explanatory. The white supremacist undertones of this game are undeniable. Swipe through for sources. Let me know in the comments if you have any questions.",
    "comments" : ["omg i always thought this","no way yall believe this is real","I KNEW THERE WAS SOMETHING OFF ABOUT MY EX","thank goodness someone said it"]
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
    newCaption.innerText = object['caption'];
  newElement.appendChild(newCaption);



  //
  //
  // let newTitle = document.createElement("H4");
  // newTitle.innerText = object['title'];
  // newTitle.style.backgroundColor = "white";
  //
  // let newArtist = document.createElement("H5");
  // newArtist.style.backgroundColor = "white";
  // newArtist.innerText = object['artist'];
  //
  // let newTrackListText = document.createElement("H6");
  // newTrackListText.style.backgroundColor = "white";
  // newTrackListText.innerText = "Favorite tracks:";

  let newCommentList = document.createElement("UL");
  for (var i=0;i<object['comments'].length;i++){
    let newComment = document.createElement("LI");
    let comment = object['comments'][i];
    newComment.innerText = comment;
    newCommentList.appendChild(newComment);
  }
  newElement.appendChild(newCommentList);



  contentGrid.appendChild(newElement);
}
