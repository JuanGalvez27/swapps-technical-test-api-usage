// import useFetchImg from '../hooks/useFetchImg'

const BookCard = ({book}) => {
  
  const title = book.title;
  const author = book.author_name ? book.author_name[0]: null;
  const publishYear = book.publish_year ? book.publish_year[0] : null;
  const isbn = book.isbn ? book.isbn[0]: null
  const noImage = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png?20210219185637'
  const src  = isbn ? `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg` : noImage;

  return (
    <>
      <img src={src} alt="Book cover" loading="lazy" />
      <div>Name: {title}</div> 
      <div>Author: {author}</div>
      <div>Publish Year: {publishYear}</div>
      <div>ISBN: {isbn}</div>
      <br/>
    </>
  )
}

export default BookCard