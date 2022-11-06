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
        {/* {results.docs ? <BookCard book={results.docs[0]} /> : null} */}
      </div>
  );
}

export default App;
