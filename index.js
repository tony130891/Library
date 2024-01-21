const dialog = document.querySelector("dialog");
const btn = document.querySelector(".btn-outline-primary");
const form = document.querySelector("form");
const btnCancel = document.querySelector("#js-close");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const divBook = document.querySelector(".library");
const toggleBtn = document.querySelector(".toggle");

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

Book.prototype.Isread = function () {
  return `${this.title} by ${this.author} of ${this.pages}`;
};

btn.addEventListener("click", () => {
  dialog.showModal();
});

btnCancel.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

function addBookToLibrary() {
  let title = inputTitle.value;
  let author = inputAuthor.value;
  let pages = inputPages.value;
  let newBook = new Book(title, author, pages);

  myLibrary.push(newBook);
}
//action element for the toggle btn
let active = false;

function displayer() {
  divBook.textContent = "";
  for (let book of myLibrary) {
    let content = document.createElement("div");
    content.textContent = `${book.title}, ${book.author}, ${book.pages}`;
    // delete button
    let btn = document.createElement("button");
    btn.textContent = "Delete Book";
    content.appendChild(btn);
    btn.addEventListener("click", () => {
      content.removeChild(btn);
      divBook.removeChild(content);
    });
    // toggle button
    divBook.appendChild(content);
  }
}

form.addEventListener("submit", () => {
  addBookToLibrary();
  displayer();
});

function toggle() {
  let toggle = document.querySelector(".toggle");
  active = !active;
  if (active) {
    toggle.classList.add("active");
  }
}
