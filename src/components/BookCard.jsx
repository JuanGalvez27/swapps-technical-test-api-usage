
const BookCard = (book) => {
  
  return (
    <div>
      Name: {book.title}
      Author: {book.author_name[0]}
    </div>
  )
}

export default BookCard