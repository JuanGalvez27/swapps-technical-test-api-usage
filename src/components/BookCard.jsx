const BookCard = ({book}) => {
  
/**
 * this component show the information of each book fetched
 */

  /**
   * save the props on a external variable
   */
  const title = book.title;
  const author = book.author_name ? book.author_name[0]: null;
  const publishYear = book.publish_year ? book.publish_year[0] : null;
  const isbn = book.isbn ? book.isbn[0]: null
  const noImage = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png?20210219185637'
  const src  = isbn ? `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg` : noImage;

  return (
    <>
      <div className="container bg-yellow-500 m-2 w-72 h-96 rounded-2xl p-4">
        <div className="flex justify-center h-40 w-full bg-inherit rounded-xl">
          <img src={src} alt="Book cover" loading="lazy" />
        </div>
        <div className="bg-yellow-800 rounded-2xl p-3 mt-3">
          <div>Name: {title}</div> 
          <div>Author: {author}</div>
          <div>Publish Year: {publishYear}</div>
          <div>ISBN: {isbn}</div>
        </div>
      </div>
    </>
  )
}

export default BookCard