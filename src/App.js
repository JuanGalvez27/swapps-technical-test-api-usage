import './App.css';
import { SearchInput } from './components/SearchInput';
import { DataProvider } from './context/DataContext';

function App() {
  
  return (
    <DataProvider>
      <div className="App">
        <SearchInput />
      </div>
    </DataProvider>
    
  );
}

export default App;
