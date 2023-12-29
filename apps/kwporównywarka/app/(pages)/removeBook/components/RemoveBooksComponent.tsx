'use client';

import { FC, Suspense, useState } from 'react';

import { BookNumber } from '../../../types/book';
import BookOnDisplay from '../../../components/Book/BookOnDisplay';
import { BooksFormSelect } from '../../../components/Book/BookFormSelect';
import { Container } from 'react-bootstrap';
import { removeBook } from '../../../api/booksApi';
import { useRouter } from 'next/navigation';

type RemoveBooksComponentProps = {
  books: BookNumber[];
};

const RemoveBooksComponent: FC<RemoveBooksComponentProps> = ({ books }) => {
  const router = useRouter();
  const [bookId, setBookId] = useState('0');
  const [currentFormValue, setCurrentFormValue] = useState('');

  const handleRemove = async () => {
    await removeBook(bookId);
    setBookId('0');
    setCurrentFormValue('');
    router.refresh();
  };
  return (
    <Container>
      <BooksFormSelect
        books={books}
        setBookId={setBookId}
        currentFormValue={currentFormValue}
        setCurrentFormValue={setCurrentFormValue}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <button onClick={handleRemove} className="m-4">
          Remove book
        </button>
        <BookOnDisplay
          bookId={bookId}
          setBookId={setBookId}
          setCurrentFormValue={setCurrentFormValue}
        />
      </Suspense>
    </Container>
  );
};

export default RemoveBooksComponent;
