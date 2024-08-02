// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const addBookForm = document.getElementById('addBookForm');
    const searchBookForm = document.getElementById('searchBookForm');
    const bookList = document.getElementById('bookList');
    const searchResults = document.getElementById('searchResults');

    let books = [];

    // Add Book
    addBookForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const isbn = document.getElementById('isbn').value;
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const year = document.getElementById('year').value;

        const book = {
            isbn: isbn,
            title: title,
            author: author,
            year: year
        };

        books.push(book);
        addBookForm.reset();
        displayBooks();
    });

    // Search Book
    searchBookForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const searchTitle = document.getElementById('searchTitle').value.toLowerCase();
        const results = books.filter(book => book.title.toLowerCase().includes(searchTitle));

        searchResults.innerHTML = '';
        if (results.length > 0) {
            results.forEach(book => {
                searchResults.innerHTML += `<p><strong>Title:</strong> ${book.title} <br><strong>Author:</strong> ${book.author} <br><strong>Year:</strong> ${book.year}</p>`;
            });
        } else {
            searchResults.innerHTML = '<p>No books found.</p>';
        }
    });

    // Display Books
    function displayBooks() {
        bookList.innerHTML = '';
        books.forEach(book => {
            bookList.innerHTML += `<p><strong>ISBN:</strong> ${book.isbn} <br><strong>Title:</strong> ${book.title} <br><strong>Author:</strong> ${book.author} <br><strong>Year:</strong> ${book.year}</p>`;
        });
    }
});
