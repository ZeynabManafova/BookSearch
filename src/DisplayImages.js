
function DisplayImages( props ) {

    return (
            <section className='bookContainer'>
                <>
                    <div className='images'>
                        {props.books.filter(image => props.userBook === image.title)
                            .map(getImages => <img src={getImages.book_image}  alt={getImages.description} key={getImages.title} /> 
                        )}
                    </div>
                </>
            </section>
    );
};

export default DisplayImages;




