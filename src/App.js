import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './Form.js';
import DisplayImages from './DisplayImages.js';
import './App.css';


function App() {
  // declaring useState here:
  const [bookResults, setBookResults ] = useState([]);

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
    });

    // empty dependency array 
  }, []);

  console.log(bookResults)

  const getBook = (e, bookSelection) => {
    e.preventDefault()
    console.log("the book is", bookSelection)
  }

  return (
    <div className='App'>
      <h1>Choose your Book!</h1>
      <Form 
        books={bookResults}
        bookSelection={getBook}
      />
      <DisplayImages 
      books={bookResults}/>
    </div>
  )
}

export default App;


