// import useFetchImg from '../hooks/useFetchImg'

const BookCard = ({book}) => {

  const url = book.isbn ? book.isbn[0] : null;
  const author = book.author_name ? book.author_name[0]: null;
  // const src = useFetchImg(url);

  const noImage = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png?20210219185637'
  const src  = url ? `https://covers.openlibrary.org/b/isbn/${url}-M.jpg` : noImage;

  return (
    <>
      <img src={src} alt="Book cover" loading="lazy" />
      <div>Name: {book.title}</div> 
      <div>Author: {author}</div>
      <div>Publish Year: {book.publish_year ? book.publish_year[0] : null}</div>
      <div>ISBN: {book.isbn ? book.isbn[0]: null}</div>
      <br/>
    </>
  )
}

export default BookCard