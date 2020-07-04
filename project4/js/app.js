// class List = show/gets al classes
// contains  = check classList for specific class
// add = add class
// remove = remove clasee
// toggle toggle class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


navToggle.addEventListener('click', () => {
    //console.log(links.classList);
  //  console.log(links.classList.contains("random"));
  links.classList.toggle("show-links");

  // if (links.classList.contains('show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
})


// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
