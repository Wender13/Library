// Variables

const addBook = document.querySelector('button#addBook');
const goToTop = document.querySelector('button#goToTop');
const closeButton = document.querySelector('button#closeButton');
const addButton = document.querySelector('button#addButton');

// Library

let myLibrary = [];

// Book constructor

function hideBooks() {
    const Books = document.querySelectorAll('.Book');

    for (let i = 0; i < myLibrary.length; i++) {
        Books[i].style.display = 'none'
    }
}

function showBooks() {
    const Books = document.querySelectorAll('.Book');

    for (let i = 0; i < myLibrary.length; i++) {
        Books[i].style.display = ''
    }
}

function Book(Tittle, Author, Pages, Read) {
    this.Tittle = Tittle;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
}

function removeBook() {
    const Book = this.value
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].Tittle == Book) {
            alert(`É esse! ${myLibrary[i].Tittle}`)
        } else {
            continue
        }
    }
}

function changeReadStatus() {
    const Book = this.value;
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].Tittle == Book) {
            if (myLibrary[i].Read == true) {
                myLibrary[i].Read = false;
                this.classList.remove('Read');
                this.classList.add('NotRead');
                this.textContent = 'Not read';
            } else {
                myLibrary[i].Read = true;
                this.classList.remove('NotRead');
                this.classList.add('Read');
                this.textContent = 'Read';
            }
        } else {
            continue
        }
    }

}

function addBookToLibrary(Tittle, Author, Pages, Read) {
    const Main = document.querySelector('div#Main');
    const Book = document.createElement('div');
    const tittleSpan = document.createElement('span');
    const authorSpan = document.createElement('span');
    const pagesSpan = document.createElement('span');
    const Buttons = document.createElement('div');
    const removeButton = document.createElement('button');
    const readButton = document.createElement('button');

    // Add style
    Book.classList.add('Book');
    tittleSpan.classList.add('Tittle');
    authorSpan.classList.add('Author');
    pagesSpan.classList.add('Pages');
    Buttons.classList.add('Buttons');
    removeButton.classList.add('Remove');

    // Set attribute
    removeButton.setAttribute('value', `${Tittle}`)
    readButton.setAttribute('value', `${Tittle}`)

    // Events
    removeButton.addEventListener('click', removeBook)
    readButton.addEventListener('click', changeReadStatus)

    // Add content
    tittleSpan.textContent = `${Tittle}`;
    authorSpan.textContent = `by ${Author}`;
    pagesSpan.textContent = `${Pages} pages`;
    removeButton.textContent = 'Remove';

    if (Read == true) {
        readButton.textContent = 'Read';
        readButton.classList.add('Read');
    } else {
        readButton.textContent = 'Not read';
        readButton.classList.add('NotRead');
    }

    // Append children
    Main.appendChild(Book);
    Book.appendChild(tittleSpan);
    Book.appendChild(authorSpan);
    Book.appendChild(pagesSpan);
    Book.appendChild(Buttons);
    Buttons.appendChild(readButton);
    Buttons.appendChild(removeButton);

    // Close input container

    bookInputContainer.style.display = 'none';
    addBook.style.display = '';
    goToTop.style.display = '';

    showBooks();
}

function createBook() {
    const Tittle = document.querySelector('input#tittleInput').value;
    const Author = document.querySelector('input#authorInput').value;
    const Pages = document.querySelector('input#pagesInput').value;
    const Read = document.querySelector('input#readInput').checked;

    const newBook = new Book(Tittle, Author, Pages, Read);
    myLibrary.push(newBook);
    addBookToLibrary(Tittle, Author, Pages, Read);
}

function checkValues() {
    const Tittle = document.querySelector('input#tittleInput').value;
    const Author = document.querySelector('input#authorInput').value;
    const Pages = document.querySelector('input#pagesInput').value;

    if (Tittle == '' || Author == '' || Pages == '') {
        alert('Fill in the remaining data!');
    } else {
        createBook();
    }
}

// Events

window.addEventListener('load', function () {
    bookInputContainer.style.display = 'none';
})

goToTop.addEventListener('click', function () {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})

addBook.onclick = () => {
    bookInputContainer.style.display = '';
    addBook.style.display = 'none';
    goToTop.style.display = 'none';

    hideBooks();
}

closeButton.onclick = () => {
    bookInputContainer.style.display = 'none';
    addBook.style.display = '';
    goToTop.style.display = '';

    showBooks();
}

addButton.onclick = checkValues;