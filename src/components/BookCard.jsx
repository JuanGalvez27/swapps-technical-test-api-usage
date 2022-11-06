const BookCard = ({book}) => {

  return (
    <>
      <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn ? book.isbn[0]: null}-M.jpg`}></img>
      <div>Name: {book.title}</div> 
      <div>Author: {book.author_name ? book.author_name[0]: null}</div>
      <div>Publish Year: {book.publish_year ? book.publish_year[0] : null}</div>
      <div>ISBN: {book.isbn ? book.isbn[0]: null}</div>
      <br/>
    </>
  )
}

export default BookCard