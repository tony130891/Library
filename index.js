const dialog = document.querySelector("dialog");
const btn = document.querySelector(".btn-outline-primary");
const form = document.querySelector("form");
const btnCancel = document.querySelector("#js-close");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#readCheck");
const divBook = document.querySelector(".library");
const errorMsg = document.querySelector('span.error');

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
    let divTitle = document.createElement('h3');
    let divAuthor = document.createElement('h3');
    let divPage = document.createElement('h3');
    divTitle.textContent = `Tittle: ${bookArr.title[0].toUpperCase()}${bookArr.title.slice(1)}`;
    divAuthor.textContent = `
    Author: ${bookArr.author[0].toUpperCase()}${bookArr.author.slice(1)}`
    divPage.textContent = `Pages: ${bookArr.pages}`;
    content.appendChild(divTitle);
    content.appendChild(divAuthor);
    content.appendChild(divPage);
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


inputTitle.addEventListener('input', (e) => {
  if(inputTitle.validity.valid) {
    errorMsg.textContent = "";
    errorMsg.className = 'error';
  } else {
    checkTitle();
  }
});

inputAuthor.addEventListener('input', (e) => {
  if(inputAuthor.validity.valid) {
    errorMsg.textContent = "";
    errorMsg.className = 'error';
  } else {
    checkAuthor();
  }
});

inputPages.addEventListener('input', (e) => {
  if(inputPages.validity.valid) {
    errorMsg.textContent = "";
    errorMsg.className = "error";
  } else {
    checkPages()
  }
});


form.addEventListener("submit", (e) => {
  if(!inputTitle.validity.valid) {
    checkTitle();
    e.preventDefault();
  }  
  addBookToLibrary();
  displayer();
});


function checkTitle() {
  
  if(inputTitle.validity.valueMissing) {
    errorMsg.textContent = 'The title is missing!';
  } else if(inputTitle.validity.tooShort) {
    errorMsg.textContent = 'Atleast 2 characters';
  } else if(inputTitle.validity.tooLong) {
    errorMsg.textContent = 'It exceeds the 15 characters';
  }

  errorMsg.className = 'error active';
}

function checkAuthor() {
  
  if(inputAuthor.validity.valueMissing) {
    errorMsg.textContent = 'The title is missing!';
  } else if(inputAuthor.validity.tooShort) {
    errorMsg.textContent = 'Atleast 2 characters';
  } else if(inputAuthor.validity.tooLong) {
    errorMsg.textContent = 'It exceeds the 15 characters';
  }

  errorMsg.className = 'error active';

}

function checkPages() {

  if(inputPages.validity.valueMissing) {
    errorMsg.textContent = 'you need to put atleast one page';
  } else if(inputPages.validity.rangeUnderFlow) {
    errorMsg.textContent = 'You had to have read atleast 1 page';
  } else {
    errorMsg.className = 'error active';
  }
}