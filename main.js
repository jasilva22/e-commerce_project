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