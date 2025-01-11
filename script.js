const container = document.querySelector('.main');
const addEntry = document.querySelector('.add-book');
const bookModal = document.querySelector('.book-modal');
const library = [];

addEntry.addEventListener('click', ()=> bookModal.showModal());
document.querySelector('.close-modal').addEventListener('click', ()=> bookModal.close());

document.querySelector('.submit').addEventListener('click', function(){
    addToLibrary(
        document.querySelector('#add-title').value,
        document.querySelector('#add-auth').value,
        document.querySelector('#add-pages').value,
        document.querySelector('input[name="stat"]:checked').value
    );
    bookModal.close();
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    displayLibrary();
});

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addToLibrary(title, author, pages, status){
    library.push(new Book(title, author, pages, status));
}

function displayLibrary(){
    for(let book of library){
        let card = document.createElement('div');
        card.setAttribute('class', 'card');

        let title = document.createElement('div');
        title.setAttribute('class', 'title');
            let bookName = document.createElement('span');
            bookName.setAttribute('class', 'book-name');
            bookName.textContent = `${book.title} `;

            let by = document.createElement('span');
            by.textContent = 'by ';
            
            let authorName = document.createElement('span');
            authorName.setAttribute('class', 'author');
            authorName.textContent = `${book.author}`;

            title.appendChild(bookName);
            title.appendChild(by);
            title.appendChild(authorName);

        let pages = document.createElement('div');
        pages.innerText = `Number of pages: ${book.pages}`;

        let status = document.createElement('div');
        status.innerText = `Status: ${book.status}`;

        let delBtn = document.createElement('button');

        card.appendChild(title);
        card.appendChild(pages);
        card.appendChild(status);
        card.appendChild(delBtn);
        container.appendChild(card);
    }
}