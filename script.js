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
        case 'toggle-status':
            toggleStatus(target.getAttribute('data-index'));
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
        displayLibrary();
        clearInput();
    }
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
    library.forEach((book, index) =>{
        let card = document.querySelector(`[data-index='${index}']`);

        if(!card){
        card = document.createElement('div');
        card.setAttribute('class', 'card');
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

        let btncont = document.createElement('div');
        btncont.setAttribute('class', 'button-container');
            let delBtn = document.createElement('button');
            delBtn.setAttribute('data-index', index);
            delBtn.setAttribute('class', 'delete-book');

            let toggle = document.createElement('button');
            toggle.setAttribute('class', 'toggle-status');
            toggle.setAttribute('data-index', index);

            btncont.appendChild(toggle);
            btncont.appendChild(delBtn);


        card.appendChild(title);
        card.appendChild(pages);
        card.appendChild(status);
        card.appendChild(btncont);
        container.appendChild(card);
        }
    });
}


function clearInput(){
    document.querySelector('#add-title').value = '';
    document.querySelector('#add-auth').value = '';
    document.querySelector('#add-pages').value = '';
}

function deleteBook(index){
    library.splice(index, 1);
    let cardToRemove = container.querySelector(`[data-index='${index}']`);
    if(cardToRemove){
        cardToRemove.remove();
    }
}

function toggleStatus(index){
    library[index].status = (library[index].status === 'Read') ? 'Not read' : 'Read';
    let card = container.querySelector(`[data-index='${index}'`);
    let status = card.querySelector('.card div:nth-child(3)');
    if(status){
        status.innerText = `Status: ${library[index].status}`;
    }
}
