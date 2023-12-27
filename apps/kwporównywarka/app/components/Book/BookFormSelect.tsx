'use client';

import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { Container, Form } from 'react-bootstrap';

import { BookNumber } from '../../types/book';

type BooksFormSelectProps = {
  books: BookNumber[];
  setBookId: Dispatch<SetStateAction<string>>;
};

export const BooksFormSelect: FC<BooksFormSelectProps> = ({
  books,
  setBookId,
}) => {
  const displayBooksOptions = () =>
    books.map((book: BookNumber, i: number) => (
      <option value={book.id} key={i}>
        {book.departmentCode}/{book.bookNumber}/{book.controlNumber}
      </option>
    ));

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setBookId(e.target.value);
  };

  return (
    <Container>
      <div className="mt-5  text-center">
        <Form.Select onChange={(e) => handleChange(e)}>
          <option value={''}>Choose book you want to see.</option>
          {displayBooksOptions()}
        </Form.Select>
      </div>
    </Container>
  );
};
