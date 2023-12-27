import BooksDisplay from './components/BooksDisplay';
import { getBooks } from '../../api/booksApi';

const Books = async () => {
  const books = await getBooks();

  return <BooksDisplay books={books} />;
};
export default Books;
