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

