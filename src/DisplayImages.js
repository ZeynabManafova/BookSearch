
function DisplayImages( props ) {

    return (
        <section className='bookContainer'>
            {props.books.map(getImages => {
                return(
                    <img src={getImages.book_image}  alt={getImages.description} /> 
                )
            })}
        </section>
    );
}

export default DisplayImages;