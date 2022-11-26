// code for FAQs that make the questions/answers open and close

const dropDownButtons = document.querySelectorAll('.expandButton');
const expandingSections = document.querySelectorAll('.expandable');

// console.log(dropDownButtons);

function dropDownAnswer() {

  this.classList.toggle('active');

  let targetExpandableDiv = this.dataset.targetButton;
    expandingSections.forEach(section => {
      if (targetExpandableDiv == section.dataset.targetMore) {
        section.classList.toggle('collapse');
      } 
      // else {
      //   section.classList.add('hidden')
      // }
    })
  // this.nextElementSibling.classList.toggle('hidden');

  // console.log(this)
  // console.log(this.previousElementSibling);
  // console.log(this.nextElementSibling);
}

//strings and event listeners are always in quotation marks - can be single or double - if layering need to do it in a certain order
dropDownButtons.forEach( button => {
  button.addEventListener('click', dropDownAnswer)
})

$('.slider-container').slick({
	autoplay: false, // Do we want it to autoplay? true or false
	autoplaySpeed: 2000, // How long between each slide when auto-playing
	speed: 500, // How fast is the transition in milliseconds
	arrows: true, // Do you want to show arrows to trigger each slide
	accessibility: true, // Enables keyboard tabbing and arrow key navigation
	dots: true, // Enables the dots below to show how many slides
	fade: false, // Changes the animate from slide to fade if true
	infinite: true, // When true, means that it will scroll in a circle
	pauseOnHover: false, // When true means the autoplay pauses when hovering
	pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
});
