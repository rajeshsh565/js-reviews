const user_reviews = [
  {
    name: "Sarah",
    profile_pic: "./download.jpeg",
    profession: "UX Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea eaque, voluptatibus cupiditate eos co."
  },
  {
    name: "Emma",
    profile_pic: "./download_2.jpeg",
    profession: "Attornery Support",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea eaque, voluptatibus cupiditate eos co usihdjaos aiusga iuasamnco yagcs uiac.."
  },
  {
    name: "Charlotte",
    profile_pic: "./download_3.jpeg",
    profession: "Team Leader",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea eaque, voluptatibus cupiditate eos coaskj oias yfac iuuia iasj oas usdgad ncas..."
  },
  {
    name: "Jessa",
    profile_pic: "./download_4.jpeg",
    profession: "Software Engineer",
    review:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea eaque, voluptatibus cupiditate eos coaskj oias yfac iuuia ia..."
  }
];


let pointer = 0;
const right_key = document.querySelector(".fa-angle-right");
const left_key = document.querySelector(".fa-angle-left");
const keys = document.querySelectorAll(".fa-solid");
const nameX = document.querySelector(".name");
const profile_pic = document.querySelector(".profile_pic");
const profession = document.querySelector(".profession");
const review = document.querySelector(".review");


window.addEventListener("DOMContentLoaded", function(){
     nameX.textContent = user_reviews[0].name;
     profile_pic.style.backgroundImage =
       "url(" + user_reviews[pointer].profile_pic + ")";
     profession.textContent = user_reviews[0].profession;
     review.textContent = user_reviews[0].review;

     nameX.classList.add("nameStyle");
     profession.classList.add("professionStyle");
});

keys.forEach(function(key){
     key.addEventListener("click", function(e){

          removeEntry();
          removeEntry_2();
          removeExit();
          removeExit_2();

          if(e.currentTarget.classList.contains("fa-angle-right")){
               pointer++;
               if (pointer == user_reviews.length) {
                 pointer = 0;
               }
               addExit();
               setTimeout(function () {
                 addEntry();
                 nameX.textContent = user_reviews[pointer].name;
                 profile_pic.style.backgroundImage =
                   "url(" + user_reviews[pointer].profile_pic + ")";
                 profession.textContent = user_reviews[pointer].profession;
                 review.textContent = user_reviews[pointer].review;
                 removeExit();
               }, 200);
               removeEntry();
          }
          else if(e.currentTarget.classList.contains("fa-angle-left")){
               pointer--;
               if (pointer < 0) {
                 pointer = user_reviews.length - 1;
               }
               addExit_2();
               setTimeout(function () {
                 addEntry_2();
                 nameX.textContent = user_reviews[pointer].name;
                 profile_pic.style.backgroundImage =
                   "url(" + user_reviews[pointer].profile_pic + ")";
                 profession.textContent = user_reviews[pointer].profession;
                 review.textContent = user_reviews[pointer].review;
                 removeExit_2();
               }, 200);
               removeEntry_2();
          }
     })
})

const surpriseMe = () => {
  const index = Math.floor(Math.random() * 4);
  nameX.textContent = user_reviews[index].name;
  profile_pic.style.backgroundImage =
    "url(" + user_reviews[index].profile_pic + ")";
  profession.textContent = user_reviews[index].profession;
  review.textContent = user_reviews[index].review;
}

////////////////////// Animation Functions/////////////////////

function addEntry(){
     nameX.classList.add("animate_entry");
     profile_pic.classList.add("animate_entry");
     profession.classList.add("animate_entry");
     review.classList.add("animate_entry");
}
function addExit(){
     nameX.classList.add("animate_exit");
     profile_pic.classList.add("animate_exit");
     profession.classList.add("animate_exit");
     review.classList.add("animate_exit");
}
function removeEntry(){
     nameX.classList.remove("animate_entry");
          profile_pic.classList.remove("animate_entry");
          profession.classList.remove("animate_entry");
          review.classList.remove("animate_entry");
}
function removeExit(){
     nameX.classList.remove("animate_exit");
          profile_pic.classList.remove("animate_exit");
          profession.classList.remove("animate_exit");
          review.classList.remove("animate_exit");
}

function addEntry_2() {
  nameX.classList.add("animate_entry_2");
  profile_pic.classList.add("animate_entry_2");
  profession.classList.add("animate_entry_2");
  review.classList.add("animate_entry_2");
}
function addExit_2() {
  nameX.classList.add("animate_exit_2");
  profile_pic.classList.add("animate_exit_2");
  profession.classList.add("animate_exit_2");
  review.classList.add("animate_exit_2");
}
function removeEntry_2() {
  nameX.classList.remove("animate_entry_2");
  profile_pic.classList.remove("animate_entry_2");
  profession.classList.remove("animate_entry_2");
  review.classList.remove("animate_entry_2");
}
function removeExit_2() {
  nameX.classList.remove("animate_exit_2");
  profile_pic.classList.remove("animate_exit_2");
  profession.classList.remove("animate_exit_2");
  review.classList.remove("animate_exit_2");
}