const errorMessage = 'Please fill in all fields';
const successMessage = 'Book added successfully';

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById("book-list");

    // Create tr element
    const row = document.createElement('tr');

    // Insert cols
    row.innerHTML =
      `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`;


    list.appendChild(row);
  }

  showAlert(message, className) {
    // Create a div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));

    // Get Parent
    const container = document.querySelector('.container');

    // Get Form
    const form = document.querySelector('#book-form');

    // Insert alert (insertBefore: The  insertBefore() method inserts a node as a child, right before an existing child, which you specify.)
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Local Storage class
class Store {

  static getBooks() {
    // local variable books
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      // JSON.parse: Converts a JavaScript Object Notation (JSON) string into an object.
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBook() {
    const books = Store.getBooks();

    books.forEach(function (book) {
      const ui = new UI();

      // Add book to UI
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    // JSON.stringify: Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach(function(book, index){
      // if my book isbn === to local storage isbn
      // remove the index selected
      if(book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    //
    localStorage.setItem('books', JSON.stringify(books));

  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBook);


// Event Listeners for add book
document.getElementById('book-form').addEventListener('submit',
  function (e) {
    // Get Form values
    const title = document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value;

    // Instantiate Book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    // Validate 
    if (title === '' || author === '' || isbn === '') {
      // Error alert
      ui.showAlert(errorMessage, 'error');
    } else {
      // Add book to li
      ui.addBookToList(book);

      // Add to local storage
      Store.addBook(book);

      // Show success
      ui.showAlert(successMessage, 'success');
      // Clear fields
      ui.clearFields();
    }
    e.preventDefault();
  });

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {

  // Instantiate UI
  const ui = new UI();

  // Delete Book
  ui.deleteBook(e.target);

  // Remove from local storage
  // e.target.parentElement.previousElementSibling.textContent: returns the previous element of the 
  // last element
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show message
  ui.showAlert('Book removed', 'success');

  e.preventDefault();
});
