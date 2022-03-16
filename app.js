"use strict";

const switcher = document.querySelector(".btn");

switcher.addEventListener("click", function () {
    // if (document.body.className === 'light-theme') {
    //     document.body.className = 'dark-theme'
    // } else {
    //     document.body.className = 'light-theme'
    // }
  document.body.classList.toggle("dark-theme")

  let className = document.body.className;
  if (className == 'light-theme') {
      this.textContent = 'Dark';
  } else {
      this.textContent = 'Light';
  }

  console.log('current class name: ' + document.body.className);
});

//i wrote some code on my own, in which i found to be easier to come up with. but i commented it out in order to have the code truthful to the course