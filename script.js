const addBook = document.getElementById('addBook')
const goToTop = document.getElementById('goToTop')

let myLibrary = [];

function Book() {
    
}

function addBookToLibrary() {
    
}

function removeMainButtons() {
    addBook.style.display = 'none'
    goToTop.style.display = 'none'
}

function bookInput() {
    // Variables
    const bookInputContainer = document.createElement('div')
    const bookInput = document.getElementById('bookInput')
    const closeButton = document.createElement('button')
    const tittleInput = document.createElement('input')
    const authorInput = document.createElement('input')
    const pagesInput = document.createElement('input')
    const addButton = document.createElement('button')

    // Add class & style
    bookInputContainer.classList.add('addBookContainer')
    bookInput.classList.add('bookInput')
    closeButton.classList.add('closeButtonInput')
    tittleInput.classList.add('bookInputs')
    authorInput.classList.add('bookInputs')
    pagesInput.classList.add('bookInputs')
    addButton.classList.add('addButtonInput')

    // Add attribute

    // Title
    tittleInput.setAttribute('id', 'tittleInput')

    // Author
    authorInput.setAttribute('id', 'authorInput')

    // Pages
    pagesInput.setAttribute('id', 'pagesInput')
    pagesInput.setAttribute('type', 'number')

    // Buttons
    addButton.setAttribute('id', 'addButtonInput')

    // Button's text
    closeButton.textContent = 'X'
    addButton.textContent = 'Add book'

    // Append children
    bookInput.appendChild(bookInputContainer)
    bookInputContainer.appendChild(closeButton)
    bookInputContainer.appendChild(tittleInput)
    bookInputContainer.appendChild(authorInput)
    bookInputContainer.appendChild(pagesInput)
    bookInputContainer.appendChild(addButton)

    removeMainButtons()
}

addBook.addEventListener('click', bookInput)

goToTop.addEventListener('click', function () {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})