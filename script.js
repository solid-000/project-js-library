function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}
Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, status = ${this.status}`;
}
const library = [];

function addToLibrary(title, author, pages, status){
    library.push(new Book(title, author, pages, status));
}

// addToLibrary('Harry Potter', 'J.K. Rowling', 234, 'read');
// addToLibrary('The song of Ice and Fire', 'George R.R. Martin', 700, 'not read');
// addToLibrary('The Echoes of Tomorrow', 'Samantha Rivers', 356, 'unread');
// addToLibrary('Beneath the Painted Sky', 'Daniel R. Hawke', 284, 'read');
// addToLibrary('Whispers in the Void', 'Lila Thornton', 421, 'unread');
// addToLibrary('The Last Ember of Winter', 'Michael K. Stark', 303, 'read');
// addToLibrary('Secrets of the Hollow Grove', 'Elena Castillo', 298, 'unread');


