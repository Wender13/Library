// Variables

const addBook = document.getElementById('addBook')
const goToTop = document.getElementById('goToTop')
const bookInputContainer = document.getElementById('bookInputContainer')
const closeButton = document.getElementById('closeButton')
const addButton = document.getElementById('addButton')

// Library

let myLibrary = [];

// Book constructor

function Book(Tittle, Author, Pages, Read) {
    this.Tittle = Tittle
    this.Author = Author
    this.Pages = Pages
    this.Read = Read
}

function addBookToLibrary(Tittle, Author, Pages, Read) {
    const Main = document.getElementById('Main')
    const Book = document.createElement('div')
    const tittleSpan = document.createElement('span')
    const authorSpan = document.createElement('span')
    const pagesSpan = document.createElement('span')
    const Buttons = document.createElement('div')
    const removeButton = document.createElement('button')
    const readButton = document.createElement('button')

    // Add style
    Book.classList.add('Book')
    tittleSpan.classList.add('Tittle')
    authorSpan.classList.add('Author')
    pagesSpan.classList.add('Pages')
    Buttons.classList.add('Buttons')
    removeButton.classList.add('Remove')

    // Add content
    tittleSpan.textContent = `${Tittle}`
    authorSpan.textContent = `by ${Author}`
    pagesSpan.textContent = `${Pages} pages`
    removeButton.textContent = 'Remove'

    if (Read == true) {
        readButton.textContent = 'Read'
        readButton.classList.add('Read')
    } else {
        readButton.textContent = 'Not read'
        readButton.classList.add('NotRead')
    }

    // Append children
    Main.appendChild(Book)
    Book.appendChild(tittleSpan)
    Book.appendChild(authorSpan)
    Book.appendChild(pagesSpan)
    Book.appendChild(Buttons)
    Buttons.appendChild(readButton)
    Buttons.appendChild(removeButton)

    // Close input container

    bookInputContainer.style.display = 'none'
    addBook.style.display = ''
    goToTop.style.display = ''
}

function createBook() {
    const Tittle = document.getElementById('tittleInput').value
    const Author = document.getElementById('authorInput').value
    const Pages = document.getElementById('pagesInput').value
    const Read = document.getElementById('readInput').checked

    const newBook = new Book(Tittle, Author, Pages, Read)
    myLibrary.push(newBook)
    addBookToLibrary(Tittle, Author, Pages, Read) 
}

function checkValues() {
    const Tittle = document.getElementById('tittleInput').value
    const Author = document.getElementById('authorInput').value
    const Pages = document.getElementById('pagesInput').value

    if (Tittle == '' || Author == '' || Pages == '') {
        alert('Fill in the remaining data!')
    } else {
        createBook()
    }
}

// Events

window.addEventListener('load', function () {
    bookInputContainer.style.display = 'none'
})

goToTop.addEventListener('click', function () {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})

addBook.onclick = () => {
    bookInputContainer.style.display = ''
    addBook.style.display = 'none'
    goToTop.style.display = 'none'
}

closeButton.onclick = () => {
    bookInputContainer.style.display = 'none'
    addBook.style.display = ''
    goToTop.style.display = ''
}

addButton.onclick = checkValues