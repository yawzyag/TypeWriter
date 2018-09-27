/*const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

//type method
TypeWriter.prototype.type = function() {
  //   console.log("hello");
  // current index of word
  const current = this.wordIndex % this.words.length;
  //Get full text of current word
  const fullTxt = this.words[current];

  //check if deleting
  if (this.isDeleting) {
    //remove a character
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    //add caracter
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  //inser txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  //initial type speed
  let typeSpeed = 300;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  //if word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    //make pause at end
    typeSpeed = this.wait;
    //set delet to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    //move next word
    this.wordIndex++;
    // pause before start typing
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
};*/

// E6 class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    //   console.log("hello");
    // current index of word
    const current = this.wordIndex % this.words.length;
    //Get full text of current word
    const fullTxt = this.words[current];

    //check if deleting
    if (this.isDeleting) {
      //remove a character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //add caracter
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //inser txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //initial type speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //if word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      //make pause at end
      typeSpeed = this.wait;
      //set delet to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      //move next word
      this.wordIndex++;
      // pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

//init on dom loads
document.addEventListener("DOMContentLoaded", init);

//Init app
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  //init Type writer
  new TypeWriter(txtElement, words, wait);
}
