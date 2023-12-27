'use client';

import { FC, useState } from 'react';

import { BookNumber } from '../../../types/book';
import { BooksFormSelect } from '../../../components/Book/BookFormSelect';
import { Container } from 'react-bootstrap';

type ComparisonDisplayProps = {
  books: BookNumber[];
};

const ComparisonDisplay: FC<ComparisonDisplayProps> = ({ books }) => {
  const [booksId, setBooksId] = useState('Choose book you want to compare.');

  return (
    <>
      <BooksFormSelect books={books} setBookId={setBooksId} />
      <Container> {booksId}</Container>
    </>
  );
};

export default ComparisonDisplay;
