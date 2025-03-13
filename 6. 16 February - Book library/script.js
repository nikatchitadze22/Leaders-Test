document.addEventListener('DOMContentLoaded', function () {
    const showBooksButton = document.getElementById('bookBtn');
    const showLibraryButton = document.getElementById('libBtn');
    const availableBooksSection = document.getElementById('selectBook');
    const myLibrarySection = document.getElementById('selectLibrary');
    const availableBooksContainer = document.getElementById('bookSection');
    const libraryBooksContainer = document.getElementById('librarySection');

    const books = [
        { title: "Harry Potter", author: "J.K. Rowling", read: false },
        { title: "Sun, Moon and Breadfield", author: "Temur Babluani", read: true },
        { title: "After Death", author: "Agatha Christie", read: false }
    ];

    showBooksButton.addEventListener('click', function () {
        availableBooksSection.style.display = 'block';
        myLibrarySection.style.display = 'none';
        showAvailableBooks();
    });

    showLibraryButton.addEventListener('click', function () {
        availableBooksSection.style.display = 'none';
        myLibrarySection.style.display = 'block';
        showLibraryBooks();
    });

    function showAvailableBooks() {
        availableBooksContainer.innerHTML = '';
        for (let i = 0; i < books.length; i++) {
            const book = books[i];
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');
            bookDiv.innerHTML = `
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
                <button onclick="addToLibrary('${book.title}')">Add to Library</button>
            `;
            availableBooksContainer.appendChild(bookDiv);
        }
    }

    function showLibraryBooks() {
        libraryBooksContainer.innerHTML = '';
        let storedBooks = JSON.parse(localStorage.getItem('libraryBooks')) || [];

        for (let i = 0; i < storedBooks.length; i++) {
            const book = storedBooks[i];
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');
            bookDiv.innerHTML = `
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
                <button onclick="removeFromLibrary('${book.title}')">Remove from Library</button>
                <button onclick="toggleReadStatus('${book.title}')">${book.read ? 'Mark as Unread' : 'Mark as Read'}</button>
            `;
            libraryBooksContainer.appendChild(bookDiv);
        }
    }

    function addToLibrary(bookTitle) {
        const book = books.find(function (book) {
            return book.title === bookTitle;
        });

        let storedBooks = JSON.parse(localStorage.getItem('libraryBooks')) || [];
        storedBooks.push(book);
        localStorage.setItem('libraryBooks', JSON.stringify(storedBooks));

        showLibraryBooks();
    }

    function removeFromLibrary(bookTitle) {
        let storedBooks = JSON.parse(localStorage.getItem('libraryBooks')) || [];
        storedBooks = storedBooks.filter(function (book) {
            return book.title !== bookTitle;
        });
        localStorage.setItem('libraryBooks', JSON.stringify(storedBooks));

        showLibraryBooks();
    }

    function toggleReadStatus(bookTitle) {
        let storedBooks = JSON.parse(localStorage.getItem('libraryBooks')) || [];
        for (let i = 0; i < storedBooks.length; i++) {
            if (storedBooks[i].title === bookTitle) {
                storedBooks[i].read = !storedBooks[i].read;
                break;
            }
        }
        localStorage.setItem('libraryBooks', JSON.stringify(storedBooks));

        showLibraryBooks();
    }

    showAvailableBooks();
});
