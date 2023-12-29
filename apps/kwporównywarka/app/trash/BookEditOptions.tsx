import { FC } from 'react';
import { removeBook } from '../api/booksApi';
import { useRouter } from 'next/navigation';

type BookEditOptionsProps = {
  bookId: string;
  setBookId: (bookId: string) => void;
  setCurrentBook: (currentBook: undefined) => void;
  setCurrentFormValue: (currentFormValue: string) => void;
};

const BookEditOptions: FC<BookEditOptionsProps> = ({
  bookId,
  setBookId,
  setCurrentBook,
  setCurrentFormValue,
}) => {
  const router = useRouter();

  const options = [
    {
      name: 'Add new book',
      handler: () => {
        router.push('addABook');
      },
    },
    {
      name: 'Remove book',
      handler: async () => {
        await removeBook(bookId);
        setBookId('0');
        setCurrentBook(undefined);
        setCurrentFormValue('');
        router.refresh();
      },
    },
    {
      name: 'Compare books',
      handler: () => {
        throw alert('Compare book');
      },
    },
    {
      name: 'Monitore book',
      handler: () => {
        throw alert('Monitore book');
      },
    },
  ];

  return (
    <>
      {options.map((option, i) => (
        <button key={i} onClick={option.handler} className="m-2">
          {option.name}
        </button>
      ))}
    </>
  );
};

export default BookEditOptions;
