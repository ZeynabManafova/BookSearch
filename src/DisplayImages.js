
function DisplayImages( props ) {

    return (
        <>
            <section className='bookContainer'>
                <div className='images'>
                    {props.books.map(getImages => {
                        if (props.userBook === getImages.title) {
                            return(
                                <img src={getImages.book_image}  alt={getImages.description} /> 
                            )
                        }
                    })}
                </div>
            </section>
        </>
    );
}

export default DisplayImages;