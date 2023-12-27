'use client';

import { FC, Suspense, useState } from 'react';

import { BookNumber } from '../../../types/book';
import BookOnDisplay from './BookOnDisplay';
import { BooksFormSelect } from '../../../components/Book/BookFormSelect';

type BooksDisplayProps = {
  books: BookNumber[];
};

const BooksDisplay: FC<BooksDisplayProps> = ({ books }) => {
  const [bookId, setBookId] = useState('');

  return (
    <>
      <BooksFormSelect books={books} setBookId={setBookId} />
      <Suspense fallback={<div>Loading...</div>}>
        <BookOnDisplay bookId={bookId} />
      </Suspense>
    </>
  );
};

export default BooksDisplay;
