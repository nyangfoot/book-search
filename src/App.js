import './App.css';
import BookSearch from './components/BookSearch';
import BooksList from './components/BooksList';
import BooksOrder from './components/BooksOrder';

function App() {
  return (
    <div>
      <BookSearch/>
      <BooksOrder/>
      <BooksList />
    </div>
  );
}

export default App;
