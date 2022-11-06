import { useContext } from 'react';
import './App.css';
import BookCard from './components/BookCard';
import { SearchInput } from './components/SearchInput';
import { DataContext } from './context/DataContext';

function App() {

  const {results} = useContext(DataContext);
  return (
    
      <div className="App">
        <SearchInput />
        <ul>
        {results.docs 
          ? results.docs.map((book) => (
            <li key={book.key}> <BookCard book={book} /> </li>
          ))         
          : null}
      </ul>
      </div>
  );
}

export default App;
