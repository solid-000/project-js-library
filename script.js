const container = document.querySelector('.main');
const library = [];

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}
Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, status = ${this.status}`;
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
addToLibrary('Harry Potter', 'J.K. Rowling', 234, 'read');
addToLibrary('The song of Ice and Fire', 'George R.R. Martin', 700, 'not read');
addToLibrary('The Echoes of Tomorrow', 'Samantha Rivers', 356, 'unread');
addToLibrary('Beneath the Painted Sky', 'Daniel R. Hawke', 284, 'read');
addToLibrary('Whispers in the Void', 'Lila Thornton', 421, 'unread');
addToLibrary('The Last Ember of Winter', 'Michael K. Stark', 303, 'read');
addToLibrary('Secrets of the Hollow Grove', 'Elena Castillo', 298, 'unread');


displayLibrary();