import RemoveBooksComponent from './components/RemoveBooksComponent';
import { getBooks } from '../../api/booksApi';

const RemoveBook = async () => {
  const books = await getBooks();

  return <RemoveBooksComponent books={books} />;
};

export default RemoveBook;
