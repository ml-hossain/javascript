// let home = document.querySelector('#home');
// let about = document.querySelector('#about');
// let contact = document.querySelector('#contact');
// let contacttext = document.querySelector('#contacttext');
// let abouttext = document.querySelector('#abouttext');
// let hometext = document.querySelector('#hometext');

// hometext.style.display = 'initial'

// home.addEventListener('click', function(){
//   textRemove();
//   hometext.style.display = 'initial'
// })
// about.addEventListener('click', function(){
//   textRemove();
//   abouttext.style.display = 'initial'
// })
// contact.addEventListener('click', function(){
//   textRemove();
//   contacttext.style.display = 'initial'
// })

// function textRemove(){
//   document.querySelectorAll('h2').forEach(function(h2){
//     h2.style.display = 'none';
//   })
// }

// Cache the elements
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const sections = {
  home: document.querySelector('#hometext'),
  about: document.querySelector('#abouttext'),
  contact: document.querySelector('#contacttext')
};

// Function to show the relevant text and hide others
function showSection(sectionId) {
  Object.values(sections).forEach(text => text.style.display = 'none');
  sections[sectionId].style.display = 'initial';
}

// Event listener for clicks on section buttons
document.querySelectorAll('#home, #about, #contact').forEach(button => {
  button.addEventListener('click', function() {
    showSection(this.id);
  });
});

// Initial display setup
showSection('home');

