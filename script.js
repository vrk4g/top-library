const library = [new Book('Book 1', 'Author 1', 100, true), new Book('Book 2', 'Author 2', 200, false), new Book('Book 3', 'Author 3', 300, true)];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    library.push(book);
    showBooks();
}

function showBooks() {
    const books = document.querySelector('#books');
    books.innerHTML = '';

    library.forEach((value, index) => {
        // book
        const book = document.createElement('article');
        book.classList.add('book');


        // book-title
        const title = document.createElement('h3');
        title.classList.add('book-title');
        title.textContent = value.title;
        book.appendChild(title);

        // book-author
        const author = document.createElement('p');
        author.classList.add('book-author');
        author.textContent = value.author;
        book.appendChild(author);


        // book-pages
        const pages = document.createElement('p');
        pages.classList.add('book-pages');
        pages.textContent = value.pages;
        book.appendChild(pages);

        // book-read
        const read = document.createElement('p');
        read.classList.add('book-read');
        read.textContent = value.read ? 'Read' : 'Not Read';
        book.appendChild(read);
        console.log(book);

        // book-remove
        const remove = document.createElement('button');
        remove.classList.add('book-remove');
        remove.textContent = 'Remove';
        remove.addEventListener('click', () => {
            library.splice(index, 1);
            showBooks();
        });
        book.appendChild(remove);

        // book-read-toggle
        const readToggle = document.createElement('button');
        readToggle.classList.add('book-read-toggle');
        readToggle.textContent = library[index].read ? 'Not Read' : 'Read';
        readToggle.addEventListener('click', () => {
            library[index].read = !library[index].read;
            showBooks();
        });
        book.appendChild(readToggle);

        books.appendChild(book);
    });
}

showBooks();

const addBookButton = document.querySelector('#add-book');
addBookButton.addEventListener('click', () => {
    const addBookDialog = document.querySelector('#add-book-dialog');
    addBookDialog.showModal();
});

const addBookForm = document.querySelector('#add-book-form');
addBookForm.addEventListener('submit', event => {
    const bookForm = new FormData(event.target);
    addBook(
        bookForm.get('add-book-title'),
        bookForm.get('add-book-author'),
        bookForm.get('add-book-pages'),
        bookForm.get('add-book-read') === 'on',
    );
});
