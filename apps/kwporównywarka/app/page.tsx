import { getBooks } from './api/booksApi';

const Index = async () => {
  const books = await getBooks();
  console.log(books);

  return <>Hello to the prototype of porównywarka KW</>;
};
export default Index;
