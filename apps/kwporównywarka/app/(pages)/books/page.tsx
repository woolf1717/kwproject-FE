import BooksDisplayComponent from './components/BooksDisplayComponent';
import { getBooks } from '../../api/booksApi';

const Books = async () => {
  const books = await getBooks();

  return <BooksDisplayComponent books={books} />;
};
export default Books;
