import { useContext, useMemo } from 'react';
import BookCard from './BookCard';
import { SearchInput } from './SearchInput';
import { DataContext } from '../context/DataContext.js';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * main component of the app
 */
function Main() {

  const {results} = useContext(DataContext);

  /**
   * run logic only when results changes
   */
  const data = useMemo(() => {
    if (results?.docs) {
        return results.docs.map((book) => (
            <div key={book.key}> <BookCard book={book} /> </div>
          ));   
    }
  }, [results])

  return (
      <div className="bg-yellow-900 h-full text-white">
        <Navbar />
        <div className='container flex flex-col mt-50 items-center justify-center h-full'>
          
          <div className=''>
            <SearchInput />
          </div>
          <div className= ' bg-yellow-700 h-full w-auto justify-center content-center'>
            <div className='container flex flex-wrap justify-center content-center'>
              {data}
            </div>
          </div>
        </div>
        <Footer />
      </div>
  );
}

export default Main;
