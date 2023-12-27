import ComparisonDisplay from './components/ComparisonDisplay';
import { getBooks } from '../../api/booksApi';

const Compatison = async () => {
  const books = await getBooks();

  return <ComparisonDisplay books={books} />;
};

export default Compatison;
