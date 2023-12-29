'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { FC, useState } from 'react';

import { BookNumber } from 'apps/kwporównywarka/app/types/book';
import { BooksFormSelect } from 'apps/kwporównywarka/app/components/Book/BookFormSelect';
import { compareBooks } from 'apps/kwporównywarka/app/api/booksApi';

type CompareBookComponentProps = {
  books: BookNumber[];
};

const CompareBookComponent: FC<CompareBookComponentProps> = ({ books }) => {
  const [bookId, setBookId] = useState('0');
  const [bookIdSecound, setBookIdSecound] = useState('0');
  const [currentFormValue, setCurrentFormValue] = useState('');
  const [currentFormValueSecound, setCurrentFormValueSecound] = useState('');

  const handleComparison = async () => {
    if (bookId === bookIdSecound) {
      alert('You cannot compare the same books.');
    } else if (bookId === '0' || bookIdSecound === '0') {
      alert('You must select two books.');
    } else {
      const comparison = await compareBooks(bookId, bookIdSecound);
      alert(JSON.stringify(comparison));
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <BooksFormSelect
            books={books}
            setBookId={setBookId}
            currentFormValue={currentFormValue}
            setCurrentFormValue={setCurrentFormValue}
          />
        </Col>
        <Col>
          <BooksFormSelect
            books={books}
            setBookId={setBookIdSecound}
            currentFormValue={currentFormValueSecound}
            setCurrentFormValue={setCurrentFormValueSecound}
          />
        </Col>
      </Row>

      <button onClick={handleComparison} className="m-3">
        Compare books.
      </button>
    </Container>
  );
};

export default CompareBookComponent;
