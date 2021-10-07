
function DisplayImages( props ) {

    return (
        <>
            <section className='bookContainer'>
                <div className='images'>
                    {props.books.map(getImages => {
                        return(
                            <img src={getImages.book_image}  alt={getImages.description} /> 
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default DisplayImages;