const dialog = document.querySelector("dialog");
const btn = document.querySelector(".btn-outline-primary");
const form = document.querySelector("form");
const btnCancel = document.querySelector("#js-close");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#readCheck");
const divBook = document.querySelector(".library");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read ? "Read" : "Not read";
}

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
  let read = inputRead.checked;
  let newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
}

function displayer() {
  divBook.textContent = "";
  myLibrary.forEach((bookArr, index) => {
    let content = document.createElement("div");
    content.classList.add("text");
    content.setAttribute("data-book", index);
    content.textContent = `
    ${bookArr.title},
    ${bookArr.author}, 
    ${bookArr.pages}`;
    // delete button
    let btnDeleter = document.createElement("button");
    btnDeleter.setAttribute("id", "delete");
    btnDeleter.textContent = "Delete Book";
    content.appendChild(btnDeleter);
    // readText
    let readText = document.createElement(`h2`);
    readText.textContent = `${bookArr.read}`;
    // event
    btnDeleter.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      divBook.removeChild(content);
    });
    // appends
    content.appendChild(readText);
    divBook.appendChild(content);
  });
}

form.addEventListener("submit", () => {
  addBookToLibrary();
  displayer();
});
