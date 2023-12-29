'use client';

import { FC, Suspense, useState } from 'react';

import { BookNumber } from '../../../types/book';
import BookOnDisplay from '../../../components/Book/BookOnDisplay';
import { BooksFormSelect } from '../../../components/Book/BookFormSelect';
import { Container } from 'react-bootstrap';

type BooksDisplayProps = {
  books: BookNumber[];
};

const BooksDisplay: FC<BooksDisplayProps> = ({ books }) => {
  const [bookId, setBookId] = useState('0');
  const [currentFormValue, setCurrentFormValue] = useState('');

  return (
    <Container>
      <BooksFormSelect
        books={books}
        setBookId={setBookId}
        currentFormValue={currentFormValue}
        setCurrentFormValue={setCurrentFormValue}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <BookOnDisplay
          bookId={bookId}
          setBookId={setBookId}
          setCurrentFormValue={setCurrentFormValue}
        />
      </Suspense>
    </Container>
  );
};

export default BooksDisplay;
