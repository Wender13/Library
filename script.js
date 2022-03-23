const addBook = document.getElementById('addBook')
const goToTop = document.getElementById('goToTop')

let myLibrary = [];

function Book() {
    
}

function addBookToLibrary() {
    
}

function bookInput() {
    const bookInputContainer = document.createElement('div')
    const bookInput = document.getElementById('bookInput')
    bookInputContainer.classList.add('addBookContainer')
    bookInput.classList.add('bookInput')
    bookInput.appendChild(bookInputContainer)
}

addBook.addEventListener('click', bookInput)

goToTop.addEventListener('click', function () {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})