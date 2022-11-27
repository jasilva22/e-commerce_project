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

// Slider Javascript

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

// Mobile Nav Script
const buttons = document.querySelectorAll(".hamburger-button");

const mobile = document.querySelector(".mobile-menu");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    mobile.classList.toggle("collapse");
    
  })
})

// Before/After Slider - Make sure you've added jquery 

$("#ba-slider").on("input change", (e)=>{
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $('.ba-foreground-img').css('width', `${sliderPos}%`)
  // Update the position of the slider button
  $('.ba-slider-button').css('left', `calc(${sliderPos}% - 18px)`)
});

// Before/After Slider 

const sliderButton = document.querySelectorAll('.sliderButton');
const sliderSections = document.querySelectorAll('.sliderSection');


function sliderSelector() {

  let targetExpandableDiv = this.dataset.targetButton;
  sliderSections.forEach(section => {
      if (targetExpandableDiv == section.dataset.targetMore) {
        section.classList.remove('collapse');
      } 
      else {
        section.classList.add('collapse')
      }
    })

}

sliderButton.forEach( button => {
  button.addEventListener('click', sliderSelector)
})