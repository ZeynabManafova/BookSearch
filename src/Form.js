import {useState} from 'react';



function Form (props) {
    // creating variable for useState 

    const [userChoice, setUserChoice ] = useState('placeholder');
    // const bookResults = result.data.results.books
    

    const handleUserChoice = (e) => {
        setUserChoice(e.target.value)
    }

    return (
        <form onSubmit={(e) => props.getBook(e,userChoice)}>
            <select
                id=''
                name=''
                value={userChoice}
                onChange={handleUserChoice}
            >
                {/* i have 15 options (book names for the dropdown) not sure how to put them all in to dropdown without making 15 <option> in the form */}
                {/* option for placeholder dropdown */}
                <option value='placeholder' disabled>Choose a Book</option>
                {/* using .map to display book titles to the page */}
                {props.books.map(bookTitles => {
                    return (
                    <option value={bookTitles.title}>{bookTitles.title}</option>
                )})}
            </select>
                <button type='submit'>Search</button>
        </form>
        
    );

}

export default Form;

// array with book object saved with state 
// take that book array and send it to component as a props
// use .map on the book array to create options