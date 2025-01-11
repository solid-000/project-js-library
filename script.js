const container = document.querySelector('.main');
const addEntry = document.querySelector('.add-book');
const bookModal = document.querySelector('.book-modal');
const library = [];

addToLibrary('Harry Potter', 'J.K. Rowling', 367, 'Read');

displayLibrary();

addEntry.addEventListener('click', ()=> bookModal.showModal());
document.querySelector('.close-modal').addEventListener('click', ()=>{
    bookModal.close();
    clearInput();
});

document.querySelector('.main').addEventListener('click', event => {
    let target = event.target;
    switch(target.getAttribute('class')){
        case 'delete-book':
            deleteBook(target.getAttribute('data-index'));
            break;
    }
});

document.querySelector('.submit').addEventListener('click', function(){

    let name = document.querySelector('#add-title').value;
    let aname = document.querySelector('#add-auth').value;
    let num =  document.querySelector('#add-pages').value;
    let stat = document.querySelector('input[name="stat"]:checked').value;
    if(name == '' || aname == '' || num == ''){
        alert('Please fill out all the available fields!');
    }else{
        addToLibrary(name, aname, num, stat);
        bookModal.close();
        clearLibrary();
        displayLibrary();
        clearInput();
    }

    // Code for no validation
    // addToLibrary(
    //     document.querySelector('#add-title').value,
    //     document.querySelector('#add-auth').value,
    //     document.querySelector('#add-pages').value,
    //     document.querySelector('input[name="stat"]:checked').value
    // );
    // bookModal.close();
    // while (container.firstChild){
    //     container.removeChild(container.firstChild);
    // }
    // displayLibrary();
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
        let index = library.indexOf(book);
        card.setAttribute('data-index', index);


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
        delBtn.setAttribute('data-index', index);   //attribute added to bind it to card
        delBtn.setAttribute('class', 'delete-book');    //class added to trigger event listener

        card.appendChild(title);
        card.appendChild(pages);
        card.appendChild(status);
        card.appendChild(delBtn);
        container.appendChild(card);
    }
}

function clearInput(){
    document.querySelector('#add-title').value = '';
    document.querySelector('#add-auth').value = '';
    document.querySelector('#add-pages').value = '';
}

function deleteBook(index){
    library.splice(index, 1);
    clearLibrary();
    displayLibrary();
}

function clearLibrary(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}