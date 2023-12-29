import CompareBookComponent from './components/CompareBookComponent';
import { getBooks } from '../../api/booksApi';

const CompareBook = async () => {
  const books = await getBooks();
  return <CompareBookComponent books={books} />;
};

export default CompareBook;
