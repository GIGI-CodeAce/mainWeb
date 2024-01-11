
const existingGradient = window.getComputedStyle(document.body).backgroundImage;
const projectImages = document.querySelectorAll(".project-image");
const moreAbout = document.querySelector(".more-about");
var horizontalRules = document.querySelectorAll('hr');
const project = document.querySelectorAll(".project");
const projects = document.querySelector(".projects");
const tryBtn = document.querySelectorAll(".try-btn");
const aboutMe = document.querySelector(".about-me");
const DPTitle = document.getElementById("DP-title");
const credits = document.querySelector(".credits");
const welcome = document.getElementById("welcome");
let theme = Math.floor(Math.random() * 6) + 1;

const blueEl = {
  1: 'hsl(120, 100%, 25%)',
  2: 'hsl(120, 100%, 30%)',
  3: 'hsl(120, 100%, 20%)'
};
const orangeEl = {
  1:'hsl(39,100%,45%)',
  2:'hsl(39,100%,50%)',
  3:'hsl(39,80%,40%)'
};
const purpleEl = {
  1: 'hsl(300,100%,25%)',
  2: 'hsl(300,100%,30%)',
  3: 'hsl(300,100%,20%)'
};
const lumGreenEl = {
  1:'hsl(150, 100%, 35%)',
  2:'hsl(150, 100%, 40%)',
  3:'hsl(150, 100%, 30%)'
}
const violetEl = {
  1:'hsl(330, 100%, 55%)',
  2:'hsl(330, 100%, 60%)',
  3:'hsl(330, 100%, 45%)'
}
const blackEl = {
  1:'hsl(0, 0%, 20%)',
  2:'hsl(0, 0%, 25%)',
  3:'hsl(0, 0%, 15%)'
}

function ThemeChange(col1,col2,col3){

  projectImages.forEach(image => {
    image.style.backgroundColor = col1
  });
  project.forEach(item => {
    item.style.backgroundColor = col3
    item.style.borderColor = col3
  });
  for (var i = 0; i < horizontalRules.length; i++) {
    horizontalRules[i].style.borderColor = col3
}

tryBtn.forEach(button => {
  button.style.backgroundColor = col3;
  button.style.borderColor = col1;

  button.style.transition = "background-color 0.3s ease";

  button.addEventListener("mouseenter", function () {
    button.style.backgroundColor = col1
  });

  button.addEventListener("mouseleave", function () {
    button.style.backgroundColor = col3;
  });
});
  credits.style.backgroundColor = col1
  DPTitle.style.backgroundColor = col1
  aboutMe.style.backgroundColor = col2
  projects.style.backgroundColor = col1
  welcome.style.color = col3
  moreAbout.style.backgroundColor = col2
  document.body.style.backgroundColor = col3

}

 switch (theme) {
     case 1:
      ThemeChange(blueEl[1],blueEl[2],blueEl[3])
      console.log(theme);
      break;
     case 2:
      ThemeChange(blackEl[1],blackEl[2],blackEl[3])
      console.log(theme);
      break;
     case 3:
      ThemeChange(orangeEl[1],orangeEl[2],orangeEl[3])
      console.log(theme);
      break;
     case 4:
      ThemeChange(violetEl[1],violetEl[2],violetEl[3])
      console.log(theme);
      break;
     case 5:
       ThemeChange(purpleEl[1],purpleEl[2],purpleEl[3])
       console.log(theme);
      break;
     case 6:
      ThemeChange(lumGreenEl[1],lumGreenEl[2],lumGreenEl[3])
      console.log(theme);
      break;
 }

 
function redirectToGitHub1() {
    window.location.href = "https://github.com/GIGI-CodeAce/GIGI-DASH";
  }
function redirectToGitHub2() {
    window.location.href = "https://github.com/GIGI-CodeAce/YC-PG";
  }
function redirectToGitHub3() {
    window.location.href = "https://github.com/GIGI-CodeAce/DeathBall";
  }