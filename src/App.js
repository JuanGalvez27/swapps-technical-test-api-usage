import Main from './components/Main';
import { DataProvider } from './context/DataContext';
import './App.css';

function App() {
  return (
    <DataProvider>
      <Main/>
    </DataProvider>
  );
}

export default App;
