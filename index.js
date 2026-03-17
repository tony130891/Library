const main = document.querySelector(".main");
const mainBtn = document.querySelector(".btn");
const myForm = document.querySelector(".myForm");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const library = [];

function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function Displayer(book) {
  //create a div inside of main
  //fill that div with the object values
  //give it a class of card

  const newdiv = document.createElement("div");
  const title1 = document.createElement("p");
  const author1 = document.createElement("p");
  const pages1 = document.createElement("p");
  const readBtn = document.createElement("div");
  const read = document.createElement("button");

  main.appendChild(newdiv);
  newdiv.appendChild(title1);
  newdiv.appendChild(author1);
  newdiv.appendChild(pages1);
  newdiv.appendChild(readBtn);
  readBtn.appendChild(read);

  const newBook = new Books(title.value, author.value, pages.value);

  library.push(newBook);
}

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  Displayer();
});
