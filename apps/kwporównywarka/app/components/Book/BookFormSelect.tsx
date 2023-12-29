'use client';

import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

import { BookNumber } from '../../types/book';
import { Form } from 'react-bootstrap';

type BooksFormSelectProps = {
  books: BookNumber[];
  setBookId: Dispatch<SetStateAction<string>>;
  currentFormValue: string;
  setCurrentFormValue: Dispatch<SetStateAction<string>>;
};

export const BooksFormSelect: FC<BooksFormSelectProps> = ({
  books,
  setBookId,
  currentFormValue,
  setCurrentFormValue,
}) => {
  const displayBooksOptions = () => {
    console.log('display book options');
    return books.map((book: BookNumber, i: number) => (
      <option value={book.id} key={i}>
        {book.departmentCode}/{book.bookNumber}/{book.controlNumber}
      </option>
    ));
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setBookId(e.target.value);
    setCurrentFormValue(e.target.value);
  };

  return (
    <>
      <div className="mt-5  text-center">
        <Form.Select onChange={(e) => handleChange(e)} value={currentFormValue}>
          <option value={0}>Choose book you want to see.</option>
          {displayBooksOptions()}
        </Form.Select>
      </div>
    </>
  );
};
