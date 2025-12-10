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

}

dropDownButtons.forEach( button => {
  button.addEventListener('click', dropDownAnswer)
})

// Slider Javascript

$('.slider-container').slick({
	autoplay: false, 
	autoplaySpeed: 2000, 
	speed: 500, 
	arrows: true, 
	accessibility: true, 
	dots: true, 
	fade: false, 
	infinite: true, 
	pauseOnHover: false, 
	pauseOnDotsHover: true, 
});

// Mobile Nav Script
const buttons = document.querySelectorAll(".hamburger-button");

const mobile = document.querySelector(".mobile-menu");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    mobile.classList.toggle("collapse");
    
  })
})

// Before/After Slider - Make sure you've added jquery - this is flawed b/c it's calling on an id attribute in the presets.html page - inside of the loop, that means the html ends up w/multiple elements with the saem id, which is invalid: here's the response from chatgpt about it ----

// You’re using the same id (#ba-slider) inside a loop
// In your loop, every slider input is:

// <input type="range" min="1" max="100" value="50" class="ba-slider" name='ba-slider' id="ba-slider">

// That means your HTML ends up with multiple elements with the same id, which is invalid. Then this line:

// $("#ba-slider").on("input change", (e)=>{

// only attaches the event listener to the first slider it finds with that ID. So when you interact with any other slider, nothing is listening.

// Your code updates all foreground images & buttons at once

// Inside your event handler:

// $('.ba-foreground-img').css('width', `${sliderPos}%`)
// $('.ba-slider-button').css('left', `calc(${sliderPos}% - 18px)`)

// Those selectors are global — they target every .ba-foreground-img and .ba-slider-button on the page, not just the ones for the slider you're dragging.

// Right now it "looks" like it works for the first one because:

// Only the first slider has the listener.

// All foreground images update, but only the visible sliderSection shows it.

// HOW TO FIX IT:
// 1. Remove the id and rely on the class instead
// In your HTML loop, change this:
// <input type="range" min="1" max="100" value="50" class="ba-slider" name='ba-slider' id="ba-slider">
// to
// <input type="range" min="1" max="100" value="50" class="ba-slider" name="ba-slider">
// (no id)

// 2. Attach the handler to all sliders, but update only within that container
// Use jQuery to scope the updates to the current .ba-container.

// Before/After Slider - jQuery version, scoped to each container
// $(document).on('input change', '.ba-slider', function (e) {
//   const sliderPos = e.target.value;

  // Limit to THIS slider's container
  // const $container = $(this).closest('.ba-container');

//   $container.find('.ba-foreground-img').css('width', `${sliderPos}%`);
//   $container.find('.ba-slider-button').css('left', `calc(${sliderPos}% - 18px)`);
// });

// This does three important things:

// Uses .ba-slider (a class) instead of #ba-slider (a single ID).

// Uses event delegation with $(document).on(...), which is robust even if sliders are added dynamically.

// Uses closest('.ba-container') so only the matching foreground image and button for that slider are updated.

//previous code from IOC bootcamp - my own doing ---

// $("#ba-slider").on("input change", (e)=>{
  // const sliderPos = e.target.value;
  // Update the width of the foreground image
  // $('.ba-foreground-img').css('width', `${sliderPos}%`)
  // Update the position of the slider button
//   $('.ba-slider-button').css('left', `calc(${sliderPos}% - 18px)`)
// });

//chatGPT changes

// Before/After Slider - jQuery version, scoped to each container --- same as below but that one is wrapped in a container - optional but good practice
// $(document).on('input change', '.ba-slider', function (e) {
//   const sliderPos = e.target.value;

  // Limit to THIS slider's container
//   const $container = $(this).closest('.ba-container');

//   $container.find('.ba-foreground-img').css('width', `${sliderPos}%`);
//   $container.find('.ba-slider-button').css('left', `calc(${sliderPos}% - 18px)`);
// });

// Before/After Slider - jQuery version, scoped to each container -- same as above but that one is not wrapped in a container. a container is option but good practice - wrap JS so it runs after jquery and DOM are ready - if your script is in the <head> or aboce the HTML wrap it, if at bottom of page or after the hmtl/jquery this is less critical but still fine

$(function () {
  $(document).on('input change', '.ba-slider', function (e) {
    const sliderPos = e.target.value;
    const $container = $(this).closest('.ba-container');

    $container.find('.ba-foreground-img').css('width', `${sliderPos}%`);
    $container.find('.ba-slider-button').css('left', `calc(${sliderPos}% - 18px)`);
  });
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

// Form Validation 

function validateMe(){
        
  let isValid = true;
          
  for (var i = 0; i < document.forms[0].elements.length - 1; i++) { //minus 1 to eliminate submit button which is the last element
      
      //TEXT FIELD
      if(document.forms[0].elements[i].type == 'text'){
          if(document.forms[0].elements[i].value == ''){
              
              document.forms[0].elements[i].nextElementSibling.innerText = '  Please enter your ' + document.forms[0].elements[i].name;
              isValid = false;
              //return false; //do this when things are bad
          } else {
              document.forms[0].elements[i].nextElementSibling.innerText = '';
          }
      }
      
      //RADIO BUTTONS
      if(document.forms[0].elements[i].type == 'radio'){
      
          var groupname = document.forms[0].elements[i].name;
          
          document.forms[0].groupname;

          var radiobtns = document.getElementsByName(groupname);
          var groupnamechecked = false;
          
          for (var j = 0; j < radiobtns.length; j++){
              
              if (radiobtns[j].checked == true) {
                  groupnamechecked = true;
              }
          
          }
          if (groupnamechecked == false) {
              document.forms[0].elements[j].nextElementSibling.innerText = '  Please select one ';
              isValid = false;
              //return false;
          } else {
              document.forms[0].elements[j].nextElementSibling.innerText = '';
          }
          
          
      }
      
      //CHECKBOXES
      if(document.forms[0].elements[i].type == 'checkbox'){
          var checkname = document.forms[0].elements[i].name; 
          var chkbxs = document.getElementsByName(checkname);
          var checkedeval = false;
          
          for (var j=0; j<chkbxs.length; j++) {
              
              if(chkbxs[j].checked === true) {
                  checkedeval = true;
              }
          }
          if (checkedeval === false) {
              document.forms[0].elements[5].nextElementSibling.innerText = '  Please check at least one ' + checkname;
              isValid = false;
          } else {
              document.forms[0].elements[5].nextElementSibling.innerText = '';
          }
      }
      
      //SELECT MENU
      if(document.forms[0].elements[i].type == 'select-one'){
          if(document.forms[0].elements[i].value == ''){
              document.forms[0].elements[i].nextElementSibling.innerText = '  Please select your favorite Country'
              isValid = false;
              //alert(document.forms[0].elements[i].name + ' is empty!');
          } else {
              document.forms[0].elements[i].nextElementSibling.innerText = '';
          }
      }
      
      //COMMENTS
      if(document.forms[0].elements[i].type == 'textarea') {
          if(document.forms[0].elements[i].value == ''){
              
              document.forms[0].elements[i].nextElementSibling.innerText = '  Please enter some ' + document.forms[0].elements[i].name;
              isValid = false;
              
          } else {
              document.forms[0].elements[i].nextElementSibling.innerText = '';
          }
      }
      
      
      
  } 
  //SUBMIT THE FORM IF ALL FIELDS ARE VALID
      if (isValid == false){
          alert("Please fill out all form fields");
      } else {
          alert("Your form has been submitted.");
          document.getElementById("myForm").reset();
      }
return false;
  
}

//RESET THE FORM:
// var resetForm = function(){
//   document.getElementById("myForm").reset();
// }