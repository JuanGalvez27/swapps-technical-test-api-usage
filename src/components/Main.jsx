import { useContext, useMemo } from 'react';
import BookCard from './BookCard';
import { SearchInput } from './SearchInput';
import { DataContext } from '../context/DataContext.js';
import Navbar from './Navbar';
import Footer from './Footer';

function Main() {

  const {results} = useContext(DataContext);

  /**
   * run logic only when results changes
   */
  const data = useMemo(() => {
    if (results?.docs) {
        return results.docs.map((book) => (
            <li key={book.key}> <BookCard book={book} /> </li>
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
          <div className=' bg-yellow-700 flex items-center justify-center h-full rounded-xl'>
            <ul>
              {data}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
  );
}

export default Main;
