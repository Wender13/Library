const addBook = document.getElementById('addBook')
const goToTop = document.getElementById('goToTop')
const bookInputContainer = document.getElementById('bookInputContainer')
const closeButton = document.getElementById('closeButton')
const addButton = document.getElementById('addButton')

let myLibrary = [];

function Book(Tittle, Author, Pages, Read) {
    this.Tittle = Tittle
    this.Author = Author
    this.Pages = Pages
    this.Read = Read
}

function addBookToLibrary() {
    
}

function createBook() {
    
}

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

addButton.onclick = createBook