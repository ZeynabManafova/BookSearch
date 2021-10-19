import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './Form.js';
import Footer from './Footer.js';
import DisplayImages from './DisplayImages.js';
import './App.css';


function App() {
  // declaring useState here:
  const [bookResults, setBookResults ] = useState([]);
  const [userBook, setUserBook] = useState('')
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // useEffect to run api
  useEffect (() => {
    
    // api key is here: (not sure if it is good practice to declare apikey here)
    const apiKey = `R5qCoVGQlFR28q5shH796MVgyo3fYGgq`;

    axios({
      method: 'GET',
      url: `https://api.nytimes.com/svc/books/v3/lists/2021-01-20/hardcover-fiction.json`,
      dataResponse: 'json',
      params: {
        'api-key': apiKey,
        format: 'json',
      },
    }).then((result) => {
      setBookResults(result.data.results.books)
    }).catch((error) => {
      setErrorMessage('Books failed to load');
      setIsError(true);
    });

    // empty dependency array 
  }, []);
  //function that handles the book selection from the user, this function will pass down to the form component
  const getBook = (e, bookSelection) => {
    e.preventDefault()
    setUserBook(bookSelection) // sets the userBook state to the user selection
  }

  return (
    <div className='App'>
      <h1>Let's Read </h1>
      
      <Form 
        books={bookResults}
        getBook={getBook} //send the function down as a prop called getBook
      />
      {
        isError ? (
          <p>{errorMessage}</p>
          ): (
            <DisplayImages 
              books={bookResults}
              userBook={userBook}
            />
          )
      }

      <Footer />
    </div>
  )
}

export default App;



// Sorry for the messy code. 