const dialog = document.querySelector("dialog");
const btn = document.querySelector(".btn-outline-primary");
const form = document.querySelector("form");
const btnCancel = document.querySelector("#js-close");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const divBook = document.querySelector(".library");
//toggle button
let active = false;

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

Book.prototype.Isread = function () {
  let toggle = document.querySelector(".toggle");
  let text = document.querySelector("span");
  active = !active;
  if (active) {
    toggle.classList.add("active");
    text.innerHTML = "read";
  } else {
    toggle.classList.remove("active");
    text.innerHTML = "Not read";
  }
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
    btnDeleter.textContent = "Delete Book";
    content.appendChild(btnDeleter);
    // toggle button
    let toggleBtn = document.createElement(`button`);
    toggleBtn.classList.add("toggle");
    let toggleBtn2 = document.createElement("div");
    toggleBtn2.classList.add("circle");
    let toggleBtn3 = document.createElement("span");
    // event
    btnDeleter.addEventListener("click", () => {
      
    });
    toggleBtn.addEventListener("click", Toggler);
    // appends
    content.appendChild(toggleBtn);
    content.appendChild(toggleBtn3);
    toggleBtn.appendChild(toggleBtn2);
    divBook.appendChild(content);
  });
}



function Toggler() {
  let toggle = document.querySelector(".toggle");
  let text = document.querySelector("span");
  active = !active;
  if (active) {
    toggle.classList.add("active");
    text.innerHTML = "Read";
  } else {
    toggle.classList.remove("active");
    text.innerHTML = "Not read";
  }
}

form.addEventListener("submit", () => {
  addBookToLibrary();
  displayer();
});
