const dialog = document.querySelector("dialog");
const btn = document.querySelector(".btn-outline-primary");
const form = document.querySelector("form");
const btnCancel = document.querySelector("#js-close");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const tableEl = document.querySelector(".table");

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

const book2 = new Book("grinch", "man", 15);
const book3 = new Book("souless", "Robot", 10);

function addBookToLibrary() {
  //let title = inputTitle.value;
  //let author = inputAuthor.value;
  //let pages = inputPages.value;
  //let newBook = new Book(author, title, pages);
  myLibrary.push(book2);
  myLibrary.push(book3);

  for (let row = 0; row < 1; row++) {
    let tableRow = document.createElement("tr");
    for (let cells = 0; cells < 3; cells++) {
      let td = document.createElement("td");
      tableRow.appendChild(td);
    }
    tableEl.appendChild(tableRow);
  }
}

form.addEventListener("submit", () => {
  addBookToLibrary();
});
